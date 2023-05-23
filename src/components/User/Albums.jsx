import { useParams, Link } from "react-router-dom";
import loader from "../../assets/loader.gif";
import useFetch from "../../custom_hooks/useFetch";
import useAppContext from "../../custom_hooks/useAppContext";

export default function Albums() {
  const { userId } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;

  const { data, state } = useFetch(url);
  const context = useAppContext();

  return (
    <div className="main-container">
      <h1 className="header">{context.otherUser}'s Albums</h1>
      <div className="post-details">
        <Link to={-1} className="post--button">
          Back to {context.otherUser}'s Details
        </Link>
        {state == "loading" && <img src={loader} className="loader"></img>}

        {state == "success" && (
          <div className="posts">
            {data.map((album) => (
              <div className="post" key={album.id}>
                <div className="post-description">{album.title}</div>
                <Link className="post--button--next" to={`/albums/${album.id}`}>
                  {" "}
                  ❱{" "}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
