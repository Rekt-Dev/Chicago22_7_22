export let Card = (props: any) => {
  function dataOrDefault() {
    console.log(
      `bleeeeeeeeeeeeeeeeeeeeeeeeh https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg"`
    );
    function truncate(str) {
      return str.length > 10 ? str.substring(0, 7) + "..." : str;
    }
    const defaultLink =
      "https://www.artic.edu/iiif/2/d68a3f34-411d-efd4-154e-48b9c565b125/full/843,/0/default.jpg";

    if (props.item) {
      return props.item.image_id;
    } else return defaultLink;
  }
  const imageEndLink = "/full/843,/0/default.jpg";
  const imageStartLink = "https://www.artic.edu/iiif/2/";

  const artworkId = props.item.image_id;
  let constructedLink = imageStartLink + artworkId + imageEndLink;
  console.log(`this is constructedLink  ${constructedLink}`);
  let goToArtist = () => {
    console.log("go2artist invoked");
  };
  return (
    <>
      <div className="">
        <a href="OpenCard">
          <img
            width="230rem"
            height="230rem"
            alt=" 3 cats"
            src={`https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`}
            onMouseOut={() => console.log("out of hover")}
            onMouseOver={() => console.log("into hover")}
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
        <ul>
          {}
          <a href="./GoToArtist">
            <li onClick={goToArtist}>{props.item.title || "Artist name"}</li>
          </a>{" "}
          <a href="./GoToArtist">
            <li onClick={goToArtist}>
              Artist Title: {props.item.artist_title || "Title Name"}
            </li>
          </a>
          <a href="./GoToArtist">
            <li onClick={goToArtist}>
              Origin: {props.item.place_of_origin || "origin"}
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};
