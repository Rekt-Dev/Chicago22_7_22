//import { Redirect } from "./Redirect";
import Image from "react-bootstrap/Image";
export let Card = (props: any) => {
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
  };
  return (
    <div className="">
      <div className={("", "center")}>
        <div className={("", "", "", "card")}>
          <a href="./OpenCard">
            <Image
              roundedCircle
              alt=" 3 cats"
              src={`https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`}
              onMouseOut={() => console.log("out of hover")}
              onMouseOver={() => console.log("into hover")}
            />
            <div
              className=""
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </a>
          <ul>
            {}
            <a href="./GoToArtist">
              <p className={("truncate", "alignLeft")} onClick={goToArtist}>
                Title: {props.item.title || "Artist name"}
              </p>
            </a>{" "}
            <a href="./GoToArtist">
              <p className={("truncate", "alignLeft")} onClick={goToArtist}>
                Artist: {props.item.artist_title || "Title Name"}
              </p>
            </a>
            <a href="./GoToArtist">
              <p className={("truncate", "alignLeft")} onClick={goToArtist}>
                Origin: {props.item.place_of_origin || "origin"}
              </p>
            </a>
          </ul>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
