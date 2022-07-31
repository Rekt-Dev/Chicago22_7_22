import "./styles.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { useState } from "react";

export default function App() {
  const [jsonData, setJsonData] = useState([]);

  async function getData(searchData: any) {
    let data1;
    console.log("getdATA invoked");
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${searchData}&limit=10&fields=id,title,image_id,artist_names,artist_title,place_of_origin`
    );
    setJsonData(await response.json());
    console.log(jsonData);
    data1 = jsonData;
  }

  return (
    <div className={("center", "content")}>
      <div className="content">
        <Header search={getData} />
        <div></div>
        <br />

        <div className="center">
          {jsonData.data
            ? jsonData.data.map((artWork, index) => (
                <Card key={index} item={artWork} />
              ))
            : "No data to show"}
        </div>
      </div>
    </div>
  );
}

//https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id

//https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=2&fields=id,title,image_id,expose_id
