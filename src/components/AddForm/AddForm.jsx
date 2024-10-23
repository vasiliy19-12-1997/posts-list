import { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import s from "./AddFrom.module.css";
export default function AddForm(props) {
  const [post, setPost] = useState({ title: "", description: "" });

  function addPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Math.random(),
    };
    if ((newPost.title || newPost.description).length === 0) {
      debugger;
      return;
    }
    // props.setPosts([...props.posts, { ...post, newPost }]);
    props.create(newPost);
    setPost({ title: "", description: "" });
  }
  return (
    <>
      <form className={s.AddForm}>
        <div className={s.AddFormInput}>
          <Input
            style={{ marginBottom: "20px" }}
            placeholder="title..."
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
          />
          <Input
            placeholder="description..."
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            type="text"
          />
        </div>

        <div>
          <Button style={{ padding: "25px" }} onClick={addPost}>
            Add post
          </Button>
        </div>
      </form>
    </>
  );
}
