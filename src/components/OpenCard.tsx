import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function OpenCard() {
  const navigate = useNavigate();
  <NavLink className="navbar-item" activeClassName="is-active" to="/opencard">
    open card
  </NavLink>;
  return (
    <div>
      <h1>Open Card page</h1>
      <Form afterSubmit={() => navigate("/opencard")} />
    </div>
  );
}
