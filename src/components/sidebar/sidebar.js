import React from "react";
import { routes } from "./../../constants";
import ListItem from "../list-item";

const defaultStyles = {
  sidebar: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "auto",
    left: 0,
    minWidth: 240,
    maxWidth: 240,
    transform: "translateX(-100%)"
  },
  open: {
    transform: "translateX(0%)"
  }
};

function Sidebar({ isOpen }) {
  function renderListMenu() {
    let xhtml = null;
    xhtml = routes.map((route, index) => {
      return <ListItem route={route} key={index} />;
    });
    return xhtml;
  }

  return (
    <div
      className="sidebar"
      style={Object.assign(
        {},
        defaultStyles.sidebar,
        isOpen ? defaultStyles.open : null
      )}
    >
      {renderListMenu()}
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
