import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PostItem } from './PostItem';
import '../styles/App.css';
import { IPost } from '../pages/Posts';

interface PostListProps {
  posts: IPost[];
  removePost: (value: IPost) => void;
}

export const PostList = ({ posts, removePost }: PostListProps) => {
  if (!posts.length) {
    return <h1>Посты не найдены :(</h1>;
  }

  return (
    <>
      <h1>Список постов</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="animation">
            <PostItem removePost={removePost} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
