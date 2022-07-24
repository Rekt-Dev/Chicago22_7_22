import { useState } from "react";
import "../styles.css";
import Button from "react-bootstrap/Button";

export let Header = (props: any) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <h1>The Art Institute of Chicago</h1>
        <br />
        <h2>Search through the museums DB !</h2>
        <br />
        <input
          onChange={(e) => setSearch(e.target.value.trim())}
          type={"text"}
          placeholder={"Enter Your Search Here..."}
        ></input>
        <button
          variant="primary"
          className="centered"
          disabled={!search}
          onClick={() => {
            props.search(search.trim());
          }}
        >
          Search...
        </button>
      </div>
    </>
  );
};

//
