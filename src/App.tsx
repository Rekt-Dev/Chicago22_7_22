import "./styles.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { useState } from "react";

export default function App() {
  const [jsonData, setJsonData] = useState([]);
  const MockCard = (props: any) => {
    return <div>{JSON.stringify(props.item)}</div>;
  };

  let JsonDisplayer = () => {
    console.log("json displayer was invoked");
    return <div>{jsonData}</div>;
  };

  async function getData(searchData: any) {
    console.log("getdATA invoked");
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${searchData}fields=id,title,image_id`
    );
    setJsonData(await response.json());
    console.log(jsonData);
  }

  return (
    <div>
      <Header search={getData} />
      <div></div>
      <br />
      <div>
        {jsonData.data
          ? jsonData.data.map((artWork, index) => (
              <MockCard key={index} item={artWork} />
            ))
          : "No data to show"}
      </div>
    </div>
  );
}

//https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id
