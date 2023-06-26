import React, { useState } from "react";
import "../dashboard.scss";
import { logout } from "../../../../Store/Auth/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const SideNavone = ({ children }) => {
  const logoutdone = () => {
    dispatch(logout());
    history.push("/login");
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className="bod_overflow ">
      <div className="col-md-12 pt-1 pb-2 background_nav1_header">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3 ">
                <img
                  className="img-fluid"
                  src="../images/plexar/logoheader.png"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 text-right col6section m-auto">Welcome</div>
        </div>
      </div>
      <div className="col-md-12 px-0 overflow_main_dashboard">
        <div className="d-flex">
          {/* <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`side-drawer ${isOpen ? "open" : ""}`}
          >
            <div className="sidebar">
              <div className="col-md-12 pr-0 pl-1">
                <div className="col-md-12 height_fiz_menu_active">
                  <div className="py-1">
                    <i class="fas fa-book-open"></i>
                  </div>
                </div>
                <div className="col-md-12 height_fiz_menu">
                  <div className="py-1">
                    <i class="far fa-user-circle"></i>
                  </div>
                </div>
                <div className="col-md-12 height_fiz_menu">
                  <div className="py-1">
                    <i class="fas fa-tools"></i>
                  </div>
                </div>
                <div className="col-md-12 height_fiz_menu">
                  <div className="py-1">
                    <i class="fas fa-chart-line"></i>
                  </div>
                </div>
                <div className="col-md-12 height_fiz_menu">
                  <div className="py-1">
                    <i class="far fa-clipboard"></i>
                  </div>
                </div>
                <div className="col-md-12 height_fiz_menu">
                  <div className="py-1" onClick={logoutdone}>
                    <i class="fas fa-sign-out-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className={`side_nav_main_1 ${isOpen ? "open" : ""}`}>
            <div className="col-md-12 pr-0 pl-1">
              <div className="col-md-12 height_fiz_menu_active">
                <div className="py-1">
                  <i class="fas fa-book-open"></i>
                </div>
              </div>
              <div className="col-md-12 height_fiz_menu">
                <div className="py-1">
                  <i class="far fa-user-circle"></i>
                </div>
              </div>
              <div className="col-md-12 height_fiz_menu">
                <div className="py-1">
                  <i class="fas fa-tools"></i>
                </div>
              </div>
              <div className="col-md-12 height_fiz_menu">
                <div className="py-1">
                  <i class="fas fa-chart-line"></i>
                </div>
              </div>
              <div className="col-md-12 height_fiz_menu">
                <div className="py-1">
                  <i class="far fa-clipboard"></i>
                </div>
              </div>
              <div className="col-md-12 height_fiz_menu">
                <div className="py-1" onClick={logoutdone}>
                  <i class="fas fa-sign-out-alt"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="side_nav_1_right">
            <div className="col-md-12 pt-2 py-3 background_sidenav_one ">
              <div className="col-md-12 background_sidenav_two_t">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavone;
