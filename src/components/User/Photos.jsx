import { Link, useParams } from "react-router-dom";
import loader from "../../assets/loader.gif";
import useFetch from "../../custom_hooks/useFetch";

export default function Photos() {
  const { albumId } = useParams();
  const url = `https://jsonplaceholder.typicode.com/album/${albumId}/photos`;

  const { data, state } = useFetch(url);
  return (
    <div>
      <div className="main-container">
        <h1 className="header">Pictures</h1>
        {state == "loading" && (
          <img src={loader} className="loader--photo"></img>
        )}
        <br />
        <Link to={-1} className="photo-button">
          Back to Albums
        </Link>
        <br />
        {state == "success" && (
          <div className="photo--container">
            {data.length > 0 &&
              data?.map((photo) => (
                <div key={photo.id} className="photo--item">
                  <img src={photo.thumbnailUrl} className="photo" />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
