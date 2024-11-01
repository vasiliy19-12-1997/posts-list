import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../API/PostService";
import { useFetching } from "../hooks/useFething";
export function PostId(props) {
  const [postId, setPostId] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();
  const [fetchPostById, isLoading = true, error] = useFetching(async (id) => {
    const respose = await PostService.getById(id);
    setPostId(respose.data);
  });

  const [fetchCommById, isLoadingComm = true, errorComm] = useFetching(
    async (id) => {
      const respose = await PostService.getCommentsById(id);

      setComments(respose.data);
    }
  );
  useEffect(() => {
    fetchPostById(params.id);
    fetchCommById(params.id);
  }, []);
  return (
    <>
      <div>
        <h2>Страница поста c id:{params.id}</h2>
        {error || errorComm ? (
          <div>
            {error}
            {errorComm}
          </div>
        ) : (
          <div>
            <h2>{postId?.title}</h2>
            <p>{postId?.body}</p>
            <p>{comments.email}</p>
            <p>{comments.name}</p>
          </div>
        )}
      </div>
      <div>
        {isLoadingComm ? (
          <div>Loading comments...</div>
        ) : (
          comments.map((comm) => (
            <div>
              <p>{comm.email}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
