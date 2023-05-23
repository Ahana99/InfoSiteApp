import { Link, Outlet } from "react-router-dom";
import loader from "../../assets/loader.gif";
import useFetch from "../../custom_hooks/useFetch";

export default function Users() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, state } = useFetch(url);

  return (
    <div>
      <h1 className="header">Our Users...</h1>
      <div className="posts">
        {state == "loading" && <img src={loader} className="loader"></img>}
        {state == "success" &&
          data.map((user) => (
            <div className="post" key={user.id}>
              <Link className="post-title" to={`/users/${user.id}`}>
                {user.username}
              </Link>
              <div className="post-description">{user.name}</div>
            </div>
          ))}
      </div>
      <Outlet />
    </div>
  );
}
