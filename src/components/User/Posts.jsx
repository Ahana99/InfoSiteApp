import { useParams, Link } from "react-router-dom";
import loader from "../../assets/loader.gif";
import useFetch from "../../custom_hooks/useFetch";
import useAppContext from "../../custom_hooks/useAppContext";

export default function Posts() {
  const { userId } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;

  const { data, state } = useFetch(url);
  const context = useAppContext();

  return (
    <div>
      <h1 className="header">{context.otherUser}'s Posts</h1>
      <div className="post-details">
        <Link to={-1} className="post--button">
          Back to {context.otherUser}'s Details
        </Link>
        {state == "loading" && <img src={loader} className="loader"></img>}
        {state == "success" && (
          <div className="posts">
            {data.map((post) => (
              <div className="post" key={post.id}>
                <div className="post-title">{post.title}</div>
                <div className="post-description">{post.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
