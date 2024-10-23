import Button from "../UI/Button/Button";

export default function PostItem(props) {
  return (
    <>
      <div>
        <strong>
          {props.num}. {props.post.title}
        </strong>
        <p>{props.post.description}</p>
      </div>
      <div>
        <Button onClick={() => props.deletePost(props.post.id)}>
          Delete Post
        </Button>
      </div>
    </>
  );
}
