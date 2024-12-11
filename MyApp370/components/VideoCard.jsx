import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native'
import React, {useState} from 'react'

import {icons} from '../constants'
import {useVideoPlayer, VideoView} from "expo-video";
import {useEventListener} from "expo";
import {ResizeMode, Video} from "expo-av";


const VideoCard = ({video: {title, thumbnail, video, creator: {username, avatar}}}) => {
    //This state will be used to play the video
    const [play, setPlay] = useState(false)

    //This Implements the video player with expo-video
    const player = useVideoPlayer(video, (player) => {
        //player.play();
        player.staysActiveInBackground = true;
        player.showNowPlayingNotification = true
    })


    // Set up the event listener for the 'statusChange' event
    useEventListener(player, 'playingChange', ({status, error}) => {
        //setPlay(false)
    });

    return (
        <View className="floex-col items-center px-4 mb-14">
            <View className="flex-row gap-3 items-start">
                <View className="justify-center items-center flex-row flex-1">
                    <View
                        className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
                        <Image
                            source={{uri: avatar}}
                            className="w-full h-full rounded-lg"
                            resizemode="cover"
                        />
                    </View>

                    <View className="justify-center flex-1 ml-3 gap-y-1">
                        <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
                            {title}
                        </Text>
                        <Text className="text-xs text-gray-100 font-pregular" numerOfLines={1}>
                            {username}
                        </Text>
                    </View>
                </View>

                <View className="pt-2">
                    <Image
                        source={icons.menu}
                        className="w-5 h-5"
                        resizeMode="contain"
                    />
                </View>
            </View>
            {/*If play is true, show the video playing, else show the thumbnail*/}
            {play ? (

                //This Implements the video player with expo-video
                <VideoView
                    player={player} // Pass player instance
                    style={{width: Dimensions.get('window').width, height: 248, borderRadius: 15, marginTop: 3, backgroundColor: 'black'}}
                    contentFit="contain"
                    allowsFullscreen={true}
                    allowsPictureInPicture={true}
                    startsPictureInPictureAutomatically={true}
                    nativeControls={true}
                />

                /*
                //This is the video player from expo-av
                <Video
                    source={{uri: video}}
                    style={{width: Dimensions.get('window').width, height: 248, borderRadius: 15, marginTop: 3}}
                    isMuted={false}
                    resizeMode={ResizeMode.CONTAIN}
                    useNativeControls
                    shouldPlay={true}
                    onPlaybackStatusUpdate={status => {
                        if (status.didJustFinish) {
                            setPlay(false)
                        }
                    }}
                />
                 */
            ) : (
                <TouchableOpacity
                    activeOpacity={0.7}
                    //On press, set play to true
                    onPress={() => setPlay(true)}
                    className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
                >
                    <Image
                        source={{uri: thumbnail}}
                        className="w-full h-full rounded-xl mt-3"
                        resizeMode="cover"
                    />
                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}
export default VideoCard
