import {View, Text, FlatList, TouchableOpacity, ImageBackground, Image} from 'react-native'
import React, {useState} from 'react'
import * as Animatable from 'react-native-animatable'
import {icons} from "../constants";
import {VideoView, useVideoPlayer} from "expo-video";
import {useEventListener} from "expo";
import {ResizeMode, Video, Audio} from "expo-av";

const zoomIn = {
    0: {
        scale: 0.9,
    },
    1: {
        scale: 1.1,
    }
}

const zoomOut = {
    0: {
        scale: 1.1,
    },
    1: {
        scale: 0.9,
    }
}

const TrendingItem = ({activeItem, item}) => {
    const [play, setPlay] = useState(false)


    //This Implements the video player with expo-video
    const player = useVideoPlayer(item.video, (player) => {
        //player.play();
        player.staysActiveInBackground = true;
        player.showNowPlayingNotification = true
    })



    // Set up the event listener for the 'statusChange' event
    useEventListener(player, 'onStatusChange', ({status, error}) => {
        if(!status.isPlaying){
            setPlay(false);
        }
    });




    return (
        <Animatable.View
            style={{marginRight: 20}}
            animation={activeItem === item.$id ? zoomIn : zoomOut}
            duration={500}
        >
            {play ? (

                //This Implements the video player with expo-video
                <VideoView
                    player={player} // Pass player instance
                    style={{width: 168, height: 248, borderRadius: 35, marginTop: 3, backgroundColor: 'black'}}
                    contentFit="cover"
                    allowsFullscreen
                    allowsPictureInPicture
                    startsPictureInPictureAutomatically
                    />

                /*
                <Video
                    //This is the video player from expo-av
                    source={{uri: item.video}}
                    style={{width: 168, height: 248, borderRadius: 35, marginTop: 3, backgroundColor: 'black'}}
                    resizeMode={ResizeMode.COVER}
                    useNativeControls
                    shouldPlay={true}
                    isMuted={false} // Ensure it's not muted
                    volume={1.0} // Set volume level
                    onPlaybackStatusUpdate={status => {
                        if (status.didJustFinish) {
                            setPlay(false)
                        }
                    }}
                />
                 */
            ) : (
                <TouchableOpacity
                    className="relative justify-center items-center"
                    activeOpacity={0.7}
                    onPress={() => setPlay(true)}
                >
                    <ImageBackground
                        source={{uri: item.thumbnail}}
                        className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
                        resizeMode="cover"
                    />

                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </Animatable.View>
    )
}

//Trending component will display the trending videos
const Trending = ({posts}) => {
    //Set the active item to the second item in the list
    const [activeItem, setActiveItem] = useState(posts[1])

    //When the viewable items change, set the active item to the first item in the list
    const viewableItemsChanged = ({viewableItems}) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key)
        }
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({item}) => (
                <TrendingItem
                    activeItem={activeItem}
                    item={item}
                />
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 50
            }}
            contentOffset={{x: 170}}
            // Set horizontal to true
            horizontal
        />
    )
}
export default Trending
