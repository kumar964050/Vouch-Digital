import React, { useState } from "react";

import "./index.css";

// icons
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

import Data from "./../../Utils/data";

const HomeContent = ({ isActiveTab, setIsMenu }) => {
  const [searchInput, setSearchInput] = useState("");

  const filterData = Data.filter(
    (each) =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.email.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.phone.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.person.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.facilitator.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.site.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.tenants.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.tenantGroup.toLowerCase().includes(searchInput.toLowerCase())
  );

  const renderViewClient = () => {
    return (
      <>
        {/* search header */}
        <div className="search_container">
          <CiSearch className="home_icons" />
          <input
            placeholder="Search Here"
            className="search_input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        {searchInput.length >= 1 && (
          <p>Search results {filterData.length} / 10</p>
        )}
        {/* users list */}
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Email Address</th>
              <th>Phone No</th>
              <th>Contact Person</th>
              <th>Facilitator</th>
              <th>Site</th>
              <th>Tenants</th>
              <th>Tenant Groups</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((each) => {
              const {
                id,
                title,
                email,
                phone,
                person,
                site,
                facilitator,
                tenants,
                tenantGroup,
              } = each;
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{person}</td>
                  <td>{facilitator}</td>
                  <td>{site}</td>
                  <td>{tenants}</td>
                  <td>{tenantGroup}</td>
                  <td>
                    <BsThreeDotsVertical className="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };
  const renderAddClient = () => {
    return;
  };

  const renderUI = () => {
    switch (isActiveTab) {
      case "view":
        return renderViewClient();
      case "add":
        return renderAddClient();
      default:
        break;
    }
  };

  return (
    <div className="home_content_container">
      {/*  */}
      <h1 className="home_title">{isActiveTab} Clients</h1>
      {/* header */}
      <div className="content_header">
        <div style={{ display: "flex" }}>
          <span className="content_header_title">Client Master</span>
          <span className="content_header_sub_title">
            {" "}
            / {isActiveTab} Clients
          </span>
        </div>
        <div>
          <MdOutlineNotificationsNone className="home_icons" />
          <HiMenuAlt3
            onClick={() => setIsMenu(true)}
            className="home_icons close_icon"
          />
        </div>
      </div>
      {/* main content of the page */}
      {renderUI()}
    </div>
  );
};

export default HomeContent;
