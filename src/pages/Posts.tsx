import React from 'react';
import PostService from '../API/PostService';
import { PostFilter } from '../components/PostFilter';
import { PostForm } from '../components/PostForm';
import { PostList } from '../components/PostList';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePost';
import { MyButton } from '../UI/button/MyButton';
import { Loader } from '../UI/loader/Loader';
import { MyModal } from '../UI/modal/MyModal';
import { Pagination } from '../UI/pagination/Pagination';
import { getPageCount, getPagesArray } from '../utils/pages';

export interface IPost {
  title: string;
  body: string;
  id?: number;
}

export const Posts = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [filter, setFilter] = React.useState({ sort: '', value: '' });
  const [open, setOpen] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  let pagesArray = getPagesArray(totalPages);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.value);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const res = await PostService.getAll(limit, page);
    setPosts(res.data);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  React.useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePage = (page: number) => {
    setPage(page);
  };

  const createPost = (newPost: IPost) => {
    setPosts([...posts, newPost]);
    setOpen(false);
  };

  const removePost = (post: IPost) => {
    setPosts(posts.filter((p: IPost) => p.id !== post.id));
  };

  return (
    <div className="App">
      {open && (
        <MyModal setOpen={setOpen}>
          <PostForm create={createPost} />
        </MyModal>
      )}
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton style={{ marginTop: 10 }} onClick={() => setOpen(true)}>
        Создать
      </MyButton>
      {postError && <h1>Произошла ошибка</h1>}
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList removePost={removePost} posts={sortedAndSearchedPosts} />
      )}
      <Pagination page={page} changePage={changePage} pagesArray={pagesArray} />
    </div>
  );
};
