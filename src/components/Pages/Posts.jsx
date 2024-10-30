import { useState, useEffect } from "react";
import { useFilter } from "../hooks/useFilter";
import { useFetching } from "../hooks/useFething";
import { PostService } from "../API/PostService";
import { getPageCount } from "../Utils/utils";
import Button from "../UI/Button/Button";
import MyModal from "../UI/MyModal/MyModal";
import AddForm from "../AddForm/AddForm";
import PostFilter from "../PostFilter/PostFilter";
import Loader from "../UI/Loader/Loader";
import PostItem from "../PostItem/PostItem";
import Pagination from "../UI/Pagination/Pagination";
import "../../App.css";
export function Posts() {
  const postsStorage = JSON.parse(localStorage.getItem("posts"));
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "title", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchPosts = useFilter(filter.sort, filter.query, posts);
  const [fetching, isLoading = true, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers["x-total-count"];
    setPosts(response.data);
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

  useEffect(() => {
    fetching();
  }, [page]);
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
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0px",
          }}
        >
          <Loader></Loader>
        </div>
      ) : (
        <div>
          {sortedAndSearchPosts.map((post, index) => (
            <div key={post.id} className="post">
              <PostItem num={index + 1} post={post} deletePost={deletePost} />
            </div>
          ))}
        </div>
      )}
      {error && <div>{error}</div>}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      {/* {sortedAndSearchPosts.length === 0 && (
        <strong style={{ display: "flex", justifyContent: "center" }}>
          Нет постов
        </strong>
      )} */}
    </div>
  );
}
