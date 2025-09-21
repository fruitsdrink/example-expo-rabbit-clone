import { Redirect, router, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import {AntDesign, Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'
import { View } from "react-native";

export default function ProtectedLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/sign-in"} />;
  }

  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="post/[id]" options={{ 
      headerStyle: {
        backgroundColor: '#ff5700'
      },
      animation: 'slide_from_bottom',
      headerBackButtonDisplayMode: 'minimal',
      headerLeft: ()=> <AntDesign name="close" size={24} color="white" onPress={()=> router.back()} />,
      headerRight: ()=>(
        <View style={{flexDirection: 'row', gap: 10}}>
          <Ionicons name="search" size={24} color="white" />
          <MaterialIcons name="sort" size={24} color="white" />
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>
      )
    }} />
  </Stack>
}
