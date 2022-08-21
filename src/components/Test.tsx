import { Navigate } from "react-router-dom";
import { React, useState, Form } from "react";
function Test() {
  const [navToOpenCard, setNavToOpenCard] = useState(false);

  if (navToOpenCard === true) {
    return <Navigate to="/opencard" />;
  }

  return (
    <div>
      <h1>Test component</h1>
      <Form afterSubmit={() => navToOpenCard(true)} />
    </div>
  );
}
