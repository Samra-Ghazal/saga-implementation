import React, { useEffect, useState } from "react";
import "./NavbarLanding.scss";
import { Link, useHistory } from "react-router-dom";

function NavbarLanding() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  let history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className="col-md-12">
      new navigation for landing will be avaliabel here
      <Link to="/login">
        <button className="btn btn-primary">Signin</button>
      </Link>
    </div>
  );
}

export default NavbarLanding;
