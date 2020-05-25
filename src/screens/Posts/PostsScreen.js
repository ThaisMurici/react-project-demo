import React, { useEffect } from "react";

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
      </ContentContainer>
    </ScreenContainer>
  );
}

export default Posts;
