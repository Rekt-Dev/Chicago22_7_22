import "./styles.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { useState } from "react";

export default function App() {
  const [jsonData, setJsonData] = useState(["bro", "sir", "dad", "mom"]);

  const MockCard = (props) => {
    return <div>{JSON.stringify(props.item)}</div>;
  };

  let JsonDisplayer = () => {
    console.log("json displayer was invoked");
    return <div>{jsonData}</div>;
  };

  async function getData(searchData: any) {
    console.log("getdATA invoked");
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${searchData}`
    );
    setJsonData(await response.json());
    console.log(jsonData);
  }

  return (
    <div>
      <Header search={getData} />
      <div>
        {jsonData
          ? jsonData.map((singleArtWork, index) => (
              <MockCard key={index} item={singleArtWork} />
            ))
          : "No data to show"}
      </div>
    </div>
  );
}
