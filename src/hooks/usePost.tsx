import React from 'react';
import { IPost } from '../pages/Posts';

export const useSortedPosts = (posts: IPost[], sort: 'title' | 'body') => {
  const sortedPosts = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts: IPost[], sort: any, value: string) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPosts.filter((p) => p.title.toLowerCase().includes(value.toLowerCase()));
  }, [value, sortedPosts]);

  return sortedAndSearchedPosts;
};
