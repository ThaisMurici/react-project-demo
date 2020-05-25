import React, { useEffect } from "react";

import PostsTable from "./components/PostsTable";

import {
  ScreenContainer,
  ContentContainer,
  ContentHeaderContainer,
  ContentHeaderTitle,
} from "./styles";

function Posts({ posts, handleFetchPosts }) {
  useEffect(() => {
    handleFetchPosts();
  }, []);

  return (
    <ScreenContainer>
      <ContentContainer>
        <ContentHeaderContainer>
          <ContentHeaderTitle>Posts</ContentHeaderTitle>
        </ContentHeaderContainer>
        <PostsTable />
      </ContentContainer>
    </ScreenContainer>
  );
}

export default Posts;
