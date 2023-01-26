import React, { useEffect } from "react";
// Librares
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
// elements/><
import BackgroundGradiend from "../components/BackgroundGradient";
import ScreenWidthWrapper from "../components/ScreenWidthWrapper";
// Pages
import PostPage from "../pages/Posts/PostPage";
import PostsListPage from "../pages/Posts/PostsListPage";
//Store
import { getPosts } from "../store/postsSlice";

const PostsLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPostData = () => {
      dispatch(getPosts());
    };
    loadPostData();
  }, [dispatch]);

  //   let { path } = useRouteMatch();
  const path = "posts";
  return (
    <>
      <BackgroundGradiend />
      <ScreenWidthWrapper>
        <Routes>
          <Route
            path={path + "/:postId"}
            element={<PostPage />}
          />
          <Route
            path={path}
            element={<PostsListPage />}
          />
        </Routes>
        {children}
      </ScreenWidthWrapper>
    </>
  );
};

export default PostsLayout;
