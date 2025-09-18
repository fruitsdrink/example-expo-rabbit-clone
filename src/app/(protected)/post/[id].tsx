import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import posts from "@/assets/data/posts.json";
import { PostListItem } from "@/components";

export default function PostLayout() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return (
      <>
        <Stack.Screen options={{ title: "Post not found" }} />
        <View>
          <Text>Post not found</Text>
        </View>
      </>
    );
  }
  return (
    <>
      <Stack.Screen options={{ title: post.title }} />
      <View>
        <PostListItem post={post} isDetailedPost={true} />
      </View>
    </>
  );
}
