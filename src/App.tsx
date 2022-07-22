import "./styles.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

export default function App() {
  let getData = () => {
    console.log("getdATA invoked");
  };
  return (
    <div>
      <Header search={getData} />
      <Card />
    </div>
  );
}
