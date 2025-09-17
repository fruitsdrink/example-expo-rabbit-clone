import { Tabs } from "expo-router";
import {AntDesign, Feather, Ionicons} from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs  screenOptions={{
            tabBarActiveTintColor: '#000000'
        }}>
            <Tabs.Screen name="index" options={{
                title: '首页',
                headerTitle: 'RabbitClone',
                headerTintColor: '#ff5700',
                tabBarIcon:({color, size})=>(
                    <AntDesign name="home" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="chat" options={{
                title: '聊天',
                tabBarIcon:({color, size})=>(
                    <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="create" options={{
                title: '创建',
                tabBarIcon:({color, size})=>(
                    <AntDesign name="plus" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="communities" options={{
                title: '社区',
                tabBarIcon:({color, size})=>(
                    <Feather name="users" size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="inbox" options={{
                title: '收件箱',
                tabBarIcon:({color, size})=>(
                    <Feather name="bell" size={size} color={color} />
                )
            }} />
        </Tabs>
    )
}