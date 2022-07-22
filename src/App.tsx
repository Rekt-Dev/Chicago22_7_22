import "./styles.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { useState } from "react";

export default function App() {
  const [jsonData, setJsonData] = useState([]);

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
    </div>
  );
}

{
  /* <div className="center">
{jsonData
  ? jsonData.map((artWork, index) => (
      <Card key={index} item={artWork} />
    ))
  : "Search the world's most comprehensive index of full-text books."}
</div> */
}
