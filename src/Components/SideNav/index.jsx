import "./index.css";

// icons
import { AiOutlineClose } from "react-icons/ai";

const SideNav = ({ setIsActiveTab, isActiveTab, isMenu, setIsMenu }) => {
  return (
    <div className={`sidebar_container ${isMenu && "active_sidebar"}`}>
      <h3 className="sidebar_title">Company Name</h3>
      <AiOutlineClose
        onClick={() => setIsMenu(false)}
        className="form_icons sidebar_icons close_icon"
      />
      <h4 className="sidebar_sub_title">Client Master</h4>
      <button
        className={`sidebar_btn   ${
          isActiveTab === "view" && "sidebar_active_btn"
        }`}
        onClick={() => setIsActiveTab("view")}
      >
        View Clients
      </button>
      <button
        onClick={() => setIsActiveTab("add")}
        className={`sidebar_btn  ${
          isActiveTab === "add" && "sidebar_active_btn"
        }`}
      >
        Add Client
      </button>
    </div>
  );
};

export default SideNav;
