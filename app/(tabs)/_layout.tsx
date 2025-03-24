import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeProvider";

export default function TabLayout() {
  const { theme, isDark } = useTheme();

  return (
    <Tabs screenOptions={{ 
      tabBarInactiveBackgroundColor:theme.cardindex,
      tabBarActiveTintColor: "#3A72ED",
      tabBarInactiveTintColor:theme.subtitlecard,
      animation:"none",
      headerShown: false,
      tabBarActiveBackgroundColor:theme.cardindex}}>
          <Tabs.Screen
            name="location"
            options={{
              title: "Location",
              tabBarIcon: ({ color }) => <FontAwesome size={28}  name="location-arrow" color={color} />,
            }}
          />
      <Tabs.Screen
        name="health"
        options={{
          title: "Health",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heartbeat" color={color} />,
        }}
      />
        <Tabs.Screen
          name="alerts"
          options={{
            title: "Alerts",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="bell" color={color} />,
          }}
        />
        <Tabs.Screen
          name="groups"
          options={{
            title: "Groups",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="group" color={color} />,
          }}
        />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
