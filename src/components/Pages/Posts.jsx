import { useEffect, useRef, useState } from "react";
import "../../App.css";
import AddForm from "../AddForm/AddForm";
import { PostService } from "../API/PostService";
import { useFetching } from "../hooks/useFething";
import { useFilter } from "../hooks/useFilter";
import { useObserver } from "../hooks/useObserver";
import PostFilter from "../PostFilter/PostFilter";
import { PostList } from "../PostList/PostList";
import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";
import MyModal from "../UI/MyModal/MyModal";
import Pagination from "../UI/Pagination/Pagination";
import { getPageCount } from "../Utils/utils";
export function Posts() {
  const postsStorage = JSON.parse(localStorage.getItem("posts"));
  const [posts, setPosts] = useState([] || postsStorage);
  const [filter, setFilter] = useState({ sort: "title", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const observer = useRef();
  const sortedAndSearchPosts = useFilter(filter.sort, filter.query, posts);

  const [fetching, isLoading = true, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers["x-total-count"];
    setPosts([...posts, ...response.data]);
    setTotalPages(getPageCount(totalCount, limit));
  });

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
    localStorage.removeItem("posts");
  }
  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }
  function changePage(p) {
    setPage(p);
  }

  useObserver(observer, isLoading, lastElement, (entries) => {
    if (entries[0].isIntersecting && page < totalPages) {
      setPage(page + 1);
    }
  });
  useEffect(() => {
    fetching();
  }, [page, limit]);
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => setVisibleModal(!visibleModal)}
          style={{
            margin: "20px 0px",
          }}
        >
          Add form
        </Button>
      </div>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <AddForm create={createPost} />
      </MyModal>
      <hr />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        limit={limit}
        setLimit={setLimit}
      />
      {error && <h1>{error}</h1>}
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0px",
          }}
        >
          <Loader />
        </div>
      )}
      <div>
        <PostList posts={sortedAndSearchPosts} deletePost={deletePost} />
      </div>
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      <div
        ref={lastElement}
        style={{ backgroundColor: "red", width: "100%", height: "0px" }}
      ></div>
    </div>
  );
}
