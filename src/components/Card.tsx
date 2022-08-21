//import { Redirect } from "./Redirect";
import { useNavigate, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
export let Card = (props: any) => {
  function truncate(str) {
    if (str) {
      return str.length > 10 ? str.substring(0, 7) + "..." : str;
    }
  }
  const link = Link;

  function dataOrDefault() {
    const defaultLink =
      "https://www.artic.edu/iiif/2/d68a3f34-411d-efd4-154e-48b9c565b125/full/843,/0/default.jpg";

    if (props.item) {
      return props.item.image_id;
    } else return defaultLink;
  }
  //const imageEndLink = "/full/843,/0/default.jpg";
  //const imageStartLink = "https://www.artic.edu/iiif/2/";

  //const artworkId = props.item.image_id;
  //let constructedLink = imageStartLink + artworkId + imageEndLink;
  let goToArtist = () => {
    console.log(`go2artist invoked`);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className={"card"}>
          <Image
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "http://books.google.com/books/content?id=FDJBgvXyZrsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
            }}
            roundedCircle
            alt=" 3 cats"
            height="300"
            width="300"
            src={`https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`}
            onMouseOut={() => console.log("out of hover")}
            onMouseOver={() => console.log("into hover")}
          />
          <div
            className=""
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
          <p className={"truncate alignLeft"} onClick={goToArtist}>
            Title: {truncate(props.item.title) || "Artist name"}
          </p>

          <p className={"truncate alignLeft"} onClick={goToArtist}>
            Artist: {truncate(props.item.artist_title) || "Title Name"}
          </p>
          <p
            title={props.item.place_of_origin}
            className={"truncate alignLeft"}
            onClick={goToArtist}
          >
            Origin: {truncate(props.item.place_of_origin) || "origin"}
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
