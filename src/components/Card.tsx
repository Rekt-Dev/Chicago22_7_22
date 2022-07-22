import constructedLink from "./Header";
export let Card = () => {
  let goToArtist = () => {
    console.log("go2artist invoked");
  };
  const props = {};
  return (
    <>
      <div className="">
        <a href="OpenCard">
          <img
            width="70%"
            height="20%"
            alt=" 3 cats"
            src={constructedLink}
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
            <li onClick={goToArtist}>{props.artistName || "artist name"}</li>
          </a>
          <li onClick={goToArtist}>{props.title}</li>
          <li>{props.year}</li>
          <li>{props.town}</li>
        </ul>
      </div>
    </>
  );
};
