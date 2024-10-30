import { useNavigate, useParams } from "react-router-dom";
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
        <Button
          style={{ display: "flex" }}
          onClick={() => navigate(`/posts/${props.post.id}`)}
        >
          Подробнее
        </Button>
        <Button
          style={{ display: "flex" }}
          onClick={() => props.deletePost(props.post.id)}
        >
          Delete Post
        </Button>
      </div>
    </>
  );
}
