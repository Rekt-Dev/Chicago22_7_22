//import { BrowserRouter as useNavigate } from "react-router-dom";

export const OpenCard = (props) => {
  //let navigate = useNavigate();

  /* const clickCard = () => {
    console.log(`clickCard activ8d`);
  };
 */
  return (
    <div>
      <img
        alt="beauty"
        src={`https://www.artic.edu/iiif/2/${props.item.image_id}/full/843,/0/default.jpg`}
      />
    </div>
  );
};
