import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { formatDistanceToNowStrict } from "date-fns";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Link } from "expo-router";

type Props = {
  post: Post;
  isDetailedPost?: boolean;
};
export const PostListItem: React.FC<Props> = ({ post, isDetailedPost }) => {
  const shouldShowImage = isDetailedPost || post.image;
  const shouldShowDescription = isDetailedPost || !post.image;

  return (
    <Link href={`/post/${post.id}`}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          gap: 7,
          borderBottomColor: "lightgrey",
          borderBottomWidth: 1,
        }}
      >
        {/* header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: post.group.image }} style={styles.image} />
          <View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 13, color: "#3a3b3c" }}
              >
                {post.group.name}
              </Text>
              <Text
                style={{ color: "gray", fontSize: 13, alignSelf: "flex-start" }}
              >
                {formatDistanceToNowStrict(new Date(post.created_at))}
              </Text>
            </View>
            {isDetailedPost && (
              <Text style={{ fontSize: 13, color: "#2e5daa" }}>
                {post.user.name}
              </Text>
            )}
          </View>
          <Pressable
            style={{
              marginLeft: "auto",
              backgroundColor: "#0d469b",
              borderRadius: 20,
            }}
          >
            <Text style={styles.joinButtonText}>Join</Text>
          </Pressable>
        </View>
        {/* content */}
        <Text style={styles.title}>{post.title}</Text>
        {shouldShowImage && post.image && (
          <Image
            source={{ uri: post.image }}
            style={{
              width: "100%",
              aspectRatio: 4 / 3,
              borderRadius: 15,
              objectFit: "cover",
            }}
          />
        )}
        {shouldShowDescription && post.description && (
          <Text numberOfLines={isDetailedPost ? undefined : 4}>
            {post.description}
          </Text>
        )}
        {/* footer */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={[{ flexDirection: "row" }, styles.iconBox]}>
              <MaterialCommunityIcons
                name="arrow-up-bold-outline"
                size={19}
                color={"black"}
              />
              <Text>{post.upvotes}</Text>
              <View
                style={{
                  width: 1,
                  backgroundColor: "#d4d4d4",
                  height: 14,
                  marginHorizontal: 7,
                  alignSelf: "center",
                }}
              ></View>
              <MaterialCommunityIcons
                name="arrow-down-bold-outline"
                size={19}
                color={"black"}
              />
            </View>
            <View style={[{ flexDirection: "row" }, styles.iconBox]}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={19}
                color={"black"}
              />
              <Text>{post.nr_of_comments}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto", gap: 10 }}>
            <MaterialCommunityIcons
              name="trophy-outline"
              size={19}
              color={"black"}
              style={styles.iconBox}
            />
            <MaterialCommunityIcons
              name="share-outline"
              size={19}
              color={"black"}
              style={styles.iconBox}
            />
          </View>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  joinButtonText: {
    backgroundColor: "#0d469b",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 13,
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#d4d4d4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
