import { Link, useParams } from "react-router-dom";
import loader from "../../assets/loader.gif";
import useFetch from "../../custom_hooks/useFetch";
import useAppContext from "../../custom_hooks/useAppContext";
import { useEffect } from "react";

export default function User() {
  const { userId } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const { data, state } = useFetch(url);
  const context = useAppContext();

  useEffect(() => {
    context.setOtherUser((context.otherUser = data.username));
  }, [data.username]);

  return (
    <div className="post-details">
      {state == "loading" && <img src={loader} className="loader"></img>}

      {state == "success" && (
        <div className="post-detail">
          <h4 className="post-title">{data.username}</h4>
          <div className="post-description">{data.name}</div>

          <Link className="posts--button" to={`/users/${userId}/posts`}>
            Posts
          </Link>
          <Link className="posts--button" to={`/users/${userId}/albums`}>
            Albums
          </Link>
        </div>
      )}
      <Link to={-1} className="post--button">
        Back to Users
      </Link>
    </div>
  );
}
