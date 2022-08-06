import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

export const OpenCard = () => {
  let navigate = useNavigate();

  return (
    <div>
      <img
        alt="beauty"
        src="https://www.123rf.com/photo_41026708_example-white-stamp-text-on-red-backgroud.html"
      />
    </div>
  );
};
