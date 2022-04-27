import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    error,
    isPending,
  }: any = useFetch("http://localhost:8000/blogs/" + id);

  const handleDelete = () => {
    axios
      .delete("http://localhost:8000/blogs/" + blog.id)
      .then(() => navigate("/"));
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
