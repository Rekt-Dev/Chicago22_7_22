import { dataOrDefault } from "./Card";

export function GoToArtist() {
  console.log(`Go2artist activ8d`);

  dataOrDefault();

  return (
    <div>
      <h1>Artist Page ! </h1>
      <h2>{"artistname"}</h2>

      <h3>Hits:</h3>
      <ul>
        <li>bruh</li>
        <li>bruh</li>
        <li>bruh</li>
        <li>bruh</li>
        <li>bruh</li>

        <h3>Home Town</h3>
      </ul>
    </div>
  );
}
