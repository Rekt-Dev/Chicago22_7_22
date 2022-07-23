import { useState } from "react";

export let Header = (props: any) => {
  const imageEndLink = "/full/843,/0/default.jpg";
  const imageStartLink = "https://www.artic.edu/iiif/2/";
  //the artworkid  which is image_id comes from the json weve just used a promise to get
  const artworkId = "fd26fe20-e8fd-d80a-c3e9-c07365b0db61";
  const constructedLink = imageStartLink + artworkId + imageEndLink;
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <h1>The Art Institute of Chicago</h1>
        <h2>Search through the museums DB !</h2>
        <input
          onChange={(e) => setSearch(e.target.value.trim())}
          type={"text"}
          placeholder={"Enter Your Search Here..."}
        ></input>
        <button
          disabled={!search}
          onClick={() => {
            props.search(search.trim());
          }}
        >
          search
        </button>
      </div>
    </>
  );
};

//
