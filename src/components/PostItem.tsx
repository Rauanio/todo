import React from 'react';
import { MyButton } from '../UI/button/MyButton';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import { IPost } from '../pages/Posts';

interface PostItemProps {
  post: IPost;
  removePost: (value: IPost) => void;
}

export const PostItem = ({ post, removePost }: PostItemProps) => {
  return (
    <div className="post">
      <Link className="post-link" to={`/posts/${post.id}`}>
        <div className="post-content">
          <div className="post-title">
            <strong>
              {post.id}. {post.title}
            </strong>
          </div>
          <div>{post.body}</div>
        </div>
      </Link>
      <div className="post-button">
        <MyButton onClick={() => removePost(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
