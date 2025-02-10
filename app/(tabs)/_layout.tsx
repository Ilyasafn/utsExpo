import { Keyboard, Text } from "react-native";
import { Redirect, Tabs } from "expo-router";
import { useSession } from "../../contexts/ctx";
import { Octicons } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { COLORS } from "@/constants/Colors";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

export default function TabLayout() {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setIsTabBarVisible(false); // Sembunyikan tabBar saat keyboard muncul
    });

    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setIsTabBarVisible(true); // Tampilkan tabBar saat keyboard hilang
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs
        screenOptions={{
          tabBarHideOnKeyboard: true,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Beranda",
            title: "Beranda",
            tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} />,
            tabBarActiveTintColor: COLORS.secondaryBtn,
          }}
        />
        <Tabs.Screen
          name="Resep"
          options={{
            tabBarLabel: "Resep",
            title: "Resep",
            tabBarIcon: ({ color }) => <Octicons name="book" size={24} color={color} />,
            tabBarActiveTintColor: COLORS.secondaryBtn,
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarLabel: "Profile",
            title: "Profile",
            tabBarIcon: ({ color }) => <Octicons name="person" size={24} color={color} />,
            tabBarActiveTintColor: COLORS.secondaryBtn,
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
}
