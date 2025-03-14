import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabsLayout = () => {
  const TabIcon = ({ focused, icon, title }) => (
    <View>
      <Image source={icon} />
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({focused}) => <TabIcon icon={icons.home} focused={focused} title="Home"/>
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
