import React from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { Loader } from '../UI/loader/Loader';
import '../styles/App.css';
import { IPost } from '../pages/Posts';

interface IComments {
  id: number;
  name: string;
  email: string;
  body: string;
}

export const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState<IPost>({} as IPost);
  const [comment, setComment] = React.useState([]);
  const [fetchPostById, isLoading] = useFetching(async () => {
    const res = await PostService.getById(id!);
    setPost(res.data);
  });

  const [fetchCommentById] = useFetching(async () => {
    const res = await PostService.getCommentsById(id!);
    setComment(res.data);
  });

  React.useEffect(() => {
    fetchPostById();
    fetchCommentById();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="post-details">
          <div className="post-title">
            <b>{post.id}.</b>
            {post.title}
          </div>
          <div>{post.body}</div>
        </div>
      )}
      <h2>Комментарий</h2>
      {comment.map((c: IComments) => (
        <div key={c.id} className="comments">
          <div>
            <b>Имя :</b> {c.name}
          </div>
          <div>
            <b>Email :</b> {c.email}
          </div>
          <div>{c.body}</div>
        </div>
      ))}
    </div>
  );
};
