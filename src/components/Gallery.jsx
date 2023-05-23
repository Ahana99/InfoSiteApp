import loader from "../assets/loader.gif";
import useFetch from "../custom_hooks/useFetch";

export default function Gallery() {
  const url = "https://jsonplaceholder.typicode.com/photos";

  const { data, state } = useFetch(url);

  return (
    <div>
      <h1 className="header">Gallery</h1>
      {state == "loading" && <img src={loader} className="loader--photo"></img>}

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
  );
}
