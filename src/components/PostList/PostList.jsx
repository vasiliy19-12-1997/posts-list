import PostItem from "../PostItem/PostItem";

export function PostList({ posts, deletePost }) {
  return (
    <>
      {posts.map((post, index) => (
        <div key={post.id} className="post">
          <PostItem num={index + 1} post={post} deletePost={deletePost} />
        </div>
      ))}
    </>
  );
}
