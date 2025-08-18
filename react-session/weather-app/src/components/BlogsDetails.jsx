import { Link, useParams } from "react-router-dom";

function BlogsDetails({ blogs }) {
  let { id } = useParams();
  let blog = blogs.find((value) => Number(value.id) === Number(id));
  return (
    <>
      {blog ? (
        <>
          <div>BlogsDetails {blog.title}</div>
        </>
      ) : (
        <p>
          No details Found <Link to="/blogs">Blogs</Link>
        </p>
      )}
    </>
  );
}

export default BlogsDetails;
