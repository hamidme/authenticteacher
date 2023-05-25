import React, { useState } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavMobile,
  OpenMobileLinks,
} from "./styles/Header.style";
import { RegisterButton } from "./styles/Button.style";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const HandleShowNavMobile = () => {
    setShowNavMobile(!showNavMobile);
  };
  console.log(showNavMobile);
  return (
    <>
      <HeaderWrapper>
        <Logo>
          <OpenMobileLinks onClick={HandleShowNavMobile}>
            {showNavMobile ? <FaTimes /> : <FaBars />}
          </OpenMobileLinks>
          <h1>
            <span>Authentic</span> Teachers
          </h1>
        </Logo>
        <Nav>
          <span>Hire Teachers</span>
          <span className="jobs">Find School Jobs</span>
          <span>Career Advice</span>
          <span>Submit Resume</span>
          <span>Courses</span>

          <RegisterButton variant="outline">Login</RegisterButton>
          <RegisterButton>Register</RegisterButton>
        </Nav>
      </HeaderWrapper>
      {showNavMobile && (
        <NavMobile>
          <span>Hire Teachers</span>
          <span className="jobs">Find School Jobs</span>
          <span>Career Advice</span>
          <span>Submit Resume</span>
          <span>Courses</span>

          <RegisterButton className="last" variant="outline">
            Login
          </RegisterButton>
          <RegisterButton>Register</RegisterButton>
        </NavMobile>
      )}
    </>
  );
};

export default Header;
