import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div className="foo" id="appointments">
      <Box>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Welcome to Our Workshop
        </h1>
        <FooterContainer>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Reparing</FooterLink>
              <FooterLink href="#">New Parts</FooterLink>
              <FooterLink href="#">Sale</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">US</FooterLink>
              <FooterLink href="#">Uk</FooterLink>
              <FooterLink href="#">France</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Twitter
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </FooterContainer>
      </Box>
    </div>
  );
};

export default Footer;
