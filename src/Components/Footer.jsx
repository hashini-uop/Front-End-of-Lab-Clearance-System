
import React from "react";
import styled from "styled-components" 





const Box = styled.div`
  padding: 80px 60px;
  background: darkblue;
  position: bottom;
  bottom: 0;
  width: 100%;
  height: 300px;
  margin-top:30px;
  border-color: white;
  display: block;
  min-width: 1000px;



@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

const Container = styled.div`
	display: flex;
	flex-direction : column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	// background: red;
    `
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  `;
    
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,
                minmax(185px, 1fr));
  grid-gap: 20px;
    
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
                minmax(200px, 1fr));
    }
    `;
    
const FooterLink = styled.a`
  color: #fff;
  margin-bottom: -10px;
  font-size: 18px;
  diplay: inline;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
    
    &:hover {
      color: green;
      transition: 200ms ease-in;
    }
    `;
    
const Heading = styled.p`
    font-size: 24px;
    color:white;
    margin-bottom: 20px;
    font-weight: bold;
    display: block;
    text-decoration:underline;
    `;
    
  













const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#"><br/>Vision</FooterLink>
            <FooterLink href="#"><br/>Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>News</Heading>
            <FooterLink href="#">Physics</FooterLink>
            <FooterLink href="#"><br/>Chemistry</FooterLink>
            <FooterLink href="#"><br/>Computer Science</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Email</FooterLink>
            <FooterLink href="#"><br/>Phone</FooterLink>
            <FooterLink href="#"><br/>Address</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink style={{marginBottom:"15px"}} href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink style={{marginBottom:"15px"}} href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;