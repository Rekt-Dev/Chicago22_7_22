import "./styles.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { useState } from "react";

export default function App() {
  const [jsonData, setJsonData] = useState([]);

  async function getData(search) {
    console.log("getdATA invoked");
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    setJsonData(await response.json());
    console.log(jsonData);
  }

  return (
    <div>
      <Header search={getData} />
      <div>{jsonData}</div>
      <Card />
    </div>
  );
}
