"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function NavbarHeader({ setHeight }) {
  return (
    <div className="fixed-top navbar-main">
      <Navbar
        expand="lg"
        className={` sticky-top  w-100  
          shadow
        `}
      >
        <Container fluid>
          <Navbar.Brand className="text-light" style={{ cursor: "pointer" }}>
            Developer Rajneesh
          </Navbar.Brand>

          <Navbar.Collapse id="navbarScroll4">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div className="d-flex">
              <IoSearchSharp size={23} className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
