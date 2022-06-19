import React, { Component, useState, useEffect } from "react";
import NavBar from "./navBar";
import Sidebar from "./sidebar";

import "../css/admin.css";
import BlockUsers from "./block_users";
import DeleteUsers from "./delete_users";
import AddAdmin from "./add_admin";

export default function Admin() {
  const [showBlock, setShowBlock] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  useEffect(() => {}, []);

  return (
    <div class="container-fluid p-0" style={{ overflowX: "hidden" }}>
      <NavBar />
      <div className="row">
        <Sidebar
          items={[
            {
              label: "block user",
              handleClick: () => {
                setShowBlock(true);
                setShowDelete(false);
                setShowAddAdmin(false);
              },
            },
            {
              label: "delete user",
              handleClick: () => {
                setShowBlock(false);
                setShowDelete(true);
                setShowAddAdmin(false);
              },
            },
            {
              label: "add admin",
              handleClick: () => {
                setShowBlock(false);
                setShowDelete(false);
                setShowAddAdmin(true);
              },
            },
          ]}
        />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {showBlock ? (
            <BlockUsers></BlockUsers>
          ) : showDelete ? (
            <DeleteUsers></DeleteUsers>
          ) : showAddAdmin ? (
            <AddAdmin></AddAdmin>
          ) : (
            <div style={{ marginTop: "100px" }}>
              <h1>Welcome dear admin!</h1>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
