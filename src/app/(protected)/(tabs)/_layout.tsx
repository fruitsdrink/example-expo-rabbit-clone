import { Tabs } from "expo-router";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useClerk } from "@clerk/clerk-expo";

export default function TabLayout() {
  const { signOut } = useClerk();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        headerTintColor: "#000000",
        headerRight: ({ tintColor }) => {
          return (
            <Feather
              name="log-out"
              size={24}
              color={tintColor}
              style={{ paddingRight: 10 }}
              onPress={() => signOut()}
            />
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "首页",
          headerTitle: "RabbitClone",
          headerTintColor: "#ff5700",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "聊天",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "创建",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "社区",
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "收件箱",
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
