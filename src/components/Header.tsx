import { useState } from "react";
import "../styles.css";
import Button from "react-bootstrap/Button";

export let Header = (props: any) => {
  const [search, setSearch] = useState("");

  return (
    <div className={("", "")}>
      <div className="center">
        <h1 className="">The Art Institute of Chicago</h1>
        <br />
        <h2>Search through the museums DB !</h2>
        <br />
        <input
          className="alignLeft"
          onChange={(e) => setSearch(e.target.value.trim())}
          type={"text"}
          placeholder={"Enter Your Search Here..."}
        ></input>
        <Button
          variant="primary"
          className="center"
          disabled={!search}
          onClick={() => {
            props.search(search.trim());
          }}
        >
          Search...
        </Button>
      </div>
    </div>
  );
};

//
