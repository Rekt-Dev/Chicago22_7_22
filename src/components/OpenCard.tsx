//import { BrowserRouter as useNavigate } from "react-router-dom";

export const OpenCard = (props: any) => {
  function Default() {
    const defaultLink =
      "https://www.artic.edu/iiif/2/d68a3f34-411d-efd4-154e-48b9c565b125/full/843,/0/default.jpg";

    if (props.item) {
      return props.item.image_id;
    } else return defaultLink;
  }
  //let navigate = useNavigate();

  /* const clickCard = () => {
    console.log(`clickCard activ8d`);
  };
 */
  dataOrDefault();

  return (
    <div>
      <img
        alt="beauty"
        src={`https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`}
      />
    </div>
  );
};
