import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const blog = { title, body, author };
    setIsPending(true);

    axios
      .post("http://localhost:8000/blogs", {
        title: blog.title,
        body: blog.body,
        author: blog.author,
      })
      .then(() => {
        console.log("New blog added");
        setIsPending(false);
        navigate("/");
      });
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {isPending ? (
          <button disabled>Adding Blog...</button>
        ) : (
          <button> Add Blog</button>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
