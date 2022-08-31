import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
