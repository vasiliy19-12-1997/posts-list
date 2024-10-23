import { useEffect, useMemo, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm/AddForm";
import PostFilter from "./components/PostFilter/PostFilter";
import PostItem from "./components/PostItem/PostItem";
import MyModal from "./components/UI/MyModal/MyModal";
import Button from "./components/UI/Button/Button";
import { useFilter } from "./components/hooks/useFilter";
import { TransitionGroup } from "react-transition-group";
function App() {
  const postsStorage = JSON.parse(localStorage.getItem("posts"));
  const [posts, setPosts] = useState(postsStorage || []);
  const [filter, setFilter] = useState({ sort: "title", query: "" });
  const [visibleModal, setVisibleModal] = useState(false);

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
    localStorage.removeItem("posts");
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const sortedAndSearchPosts = useFilter(filter.sort, filter.query, posts);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  // useEffect(() => {}, []);

  return (
    <div className="App">
      <Button onClick={() => setVisibleModal(!visibleModal)}>Add form</Button>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <AddForm posts={posts} setPosts={setPosts} create={createPost} />
      </MyModal>

      <hr />
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      {posts.length > 0 && (
        <div>
          <TransitionGroup>
            {sortedAndSearchPosts.map((post, index) => (
              <div key={post.id} className="post">
                <PostItem num={index + 1} post={post} deletePost={deletePost} />
              </div>
            ))}
          </TransitionGroup>
        </div>
      )}
      {sortedAndSearchPosts.length === 0 && (
        <strong style={{ display: "flex", justifyContent: "center" }}>
          Нет постов
        </strong>
      )}
    </div>
  );
}

export default App;
