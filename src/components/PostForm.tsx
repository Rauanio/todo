import React from 'react';
import { IPost } from '../pages/Posts';
import { MyButton } from '../UI/button/MyButton';
import { MyInput } from '../UI/input/MyInput';

interface PostFormProps {
  create: (value: IPost) => void;
}

export const PostForm = ({ create }: PostFormProps) => {
  const [post, setPost] = React.useState({ title: '', body: '' });

  const addNewPost = () => {
    const newPost = {
      ...post,
      id: Math.random(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, title: e.target.value })
        }
        placeholder="Заголовок"
      />
      <MyInput
        value={post.body}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, body: e.target.value })
        }
        placeholder="Описание"
      />
      <MyButton onClick={addNewPost}>Добавить</MyButton>
    </form>
  );
};
