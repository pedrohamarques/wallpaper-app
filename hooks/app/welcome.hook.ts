import { useRouter } from "expo-router";

export function useWelcomeScreen() {
    const router = useRouter();

    function handleStartPress() {
        router.push("/home/");
    }
    return {
        handleStartPress,
    };
}
