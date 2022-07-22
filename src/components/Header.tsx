import { useState } from "react";

export let Header = (props: any) => {
  const [search, setSearch] = useState("");

  let sendSearchToServer = () => {
    console.log("send search to server invoked", `with ${search}`);
  };

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
