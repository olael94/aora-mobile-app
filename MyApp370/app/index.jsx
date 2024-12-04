import {StatusBar} from 'expo-status-bar';
import {Image, ScrollView, Text, View} from 'react-native';
import {Redirect, router } from 'expo-router';
// Importing SafeAreaView for ensuring content doesn't overlap with system UI
import {SafeAreaView} from 'react-native-safe-area-context';
import './global.css';
import { images } from '../constants';
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

// This is the entry point of the application
export default function App() {
    const {isLoading, isLoggedIn} = useGlobalContext();

    // Redirect to home if user is logged in
    if(!isLoading && isLoggedIn) {
        return <Redirect href="/home" />
    }

    return (
        // SafeAreaView to ensure UI elements are safe from overlapping with notches and system bars
        <SafeAreaView className="bg-primary h-full">
            {/* ScrollView for enabling vertical scrolling if content exceeds screen height */}
            <ScrollView contentContainerStyle={{ height: '100%'}}>
                {/* View for wrapping all the content */}
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    {/* Logo Image */}
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode="contain"
                    />
                    {/* Cards Image */}
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />
                    {/* Text Content */}
                    <View className="relative mt-5">
                        {/* Heading */}
                        <Text className="text-4xl text-white font-bold text-center">
                            Discover Endless Possibilities with {''}
                            {/* Text with secondary color */}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                        {/* Path Image for Aora word */}
                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8 "
                            resizeMode="contain"
                        />
                    </View>
                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation:
                        embark on a journey of limitless exploration with Aora</Text>
                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor='#161622'
                style='light'
            />
        </SafeAreaView>
    );
}


