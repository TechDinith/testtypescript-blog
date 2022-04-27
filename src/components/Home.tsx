import useFetch from "../customHooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  //local delete
  // const handleDelete = (id: number) => {
  //   setBlogs(blogs.filter((blog: any) => blog.id !== id));
  // };

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(" http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
