import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";

export default function PostItem(props) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <p>{props.post.description}</p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "210px",
          }}
        >
          <Button onClick={() => navigate(`/posts/${props.post.id}`)}>
            Information
          </Button>
          <Button onClick={() => props.deletePost(props.post.id)}>
            Delete Post
          </Button>
        </div>
      </div>
    </>
  );
}
