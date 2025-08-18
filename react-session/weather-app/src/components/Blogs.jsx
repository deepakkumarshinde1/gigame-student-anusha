import { Link } from "react-router-dom";

function Blogs({ blogs }) {
  return (
    <div>
      Blogs
      {blogs.map((blog) => {
        return (
          <fieldset key={blog.id}>
            <legend>
              {blog.title} ({blog.date})
            </legend>
            <p>
              <Link to={"/blog/" + blog.id}>View</Link>
            </p>
          </fieldset>
        );
      })}
    </div>
  );
}

export default Blogs;
