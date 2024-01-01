"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function NavbarHeader({ setHeight }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll1);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  }, []);

  const handleScroll1 = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
    setHeight(currentPosition);
  };

  return (
    <div className="fixed-top">
      <Navbar
        expand="lg"
        className={` sticky-top  w-100  ${
          scrollPosition > 2 && "navbar-main shadow"
        }`}
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
