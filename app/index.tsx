import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { colors, fontWeights, radius } from "@/constants/theme";

import { hp, wp } from "@/utils/common";

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={require("@/assets/images/welcome.jpg")}
                style={styles.backgroundImage}
                resizeMode='cover'
            />

            <Animated.View
                entering={FadeInDown.duration(600)}
                style={styles.linearGradientContainer}>
                <LinearGradient
                    colors={[
                        "rgba(255,255,255,0)",
                        "rgba(255,255,255,0.5)",
                        "white",
                        "white",
                    ]}
                    style={styles.gradient}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.8 }}></LinearGradient>
                <View style={styles.contentContainer}>
                    <Animated.Text
                        style={styles.title}
                        entering={FadeInDown.delay(400).springify()}>
                        Pixels
                    </Animated.Text>
                    <Animated.Text
                        style={styles.punchline}
                        entering={FadeInDown.delay(500).springify()}>
                        Every Pixel Tells a Story
                    </Animated.Text>

                    <Animated.View entering={FadeInDown.delay(600).springify()}>
                        <Pressable style={styles.startButton}>
                            <Text style={styles.startText}>Start Explore</Text>
                        </Pressable>
                    </Animated.View>
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: wp(100),
        height: hp(100),
        position: "absolute",
    },
    linearGradientContainer: {
        flex: 1,
    },
    gradient: {
        width: wp(100),
        height: hp(65),
        bottom: 0,
        position: "absolute",
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 14,
    },
    title: {
        fontSize: hp(7),
        color: colors.neutral(0.9),
        fontWeight: fontWeights.bold,
    },
    punchline: {
        fontSize: hp(2),
        letterSpacing: 1,
        marginBottom: 10,
        fontWeight: fontWeights.medium,
    },
    startButton: {
        marginBottom: 50,
        backgroundColor: colors.neutral(0.9),
        padding: 15,
        paddingHorizontal: 90,
        borderRadius: radius.xl,
        borderCurve: "continuous",
    },
    startText: {
        color: colors.white,
        fontSize: hp(3),
        fontWeight: fontWeights.medium,
        letterSpacing: 1,
    },
});
