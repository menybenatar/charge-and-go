import React, { Component, useState, useEffect } from "react";
import NavBar from "./navBar";
import Sidebar from "./sidebar";

import "../css/admin.css";
import BlockUsers from "./block_users";
import DeleteUsers from "./delete_users";
import AddAdmin from "./add_admin";

export default function Admin() {
  const [selectedItem, setSelectedItem] = useState(undefined);

  useEffect(() => {}, []);

  return (
    <div class="container-fluid p-0" style={{ overflowX: "hidden" }}>
      <NavBar />
      <div className="row">
        <Sidebar
          selectedItem={selectedItem}
          items={[
            {
              id: 1,
              label: "block user",
              handleClick: function () {
                setSelectedItem(this);
              },
            },
            {
              id: 2,
              label: "delete user",
              handleClick: function () {
                setSelectedItem(this);
              },
            },
            {
              id: 3,
              label: "add admin",
              handleClick: function () {
                setSelectedItem(this);
              },
            },
          ]}
        />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {!selectedItem ? (
            <div style={{ marginTop: "100px" }}>
              <h1>Welcome dear admin!</h1>
            </div>
          ) : selectedItem.id == 1 ? (
            <BlockUsers></BlockUsers>
          ) : selectedItem.id == 2 ? (
            <DeleteUsers></DeleteUsers>
          ) : selectedItem.id == 3 ? (
            <AddAdmin></AddAdmin>
          ) : (
            <></>
          )}
        </main>
      </div>
    </div>
  );
}
