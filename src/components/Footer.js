import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../../static/logos/map-logo-removebg-preview 1.png"

const Footer = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <ContentWrapper1>
          <div>
            <img src={logo} alt="" />
            <h1>Marathi association Perth</h1>
          </div>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            hendrerit elit quis metus fermentum vehicula. Ut malesuada suscipit
            elit quis interdum.
          </p>
        </ContentWrapper1>

        <ContentWrapper2 className="mt-12">
          <h3>Important Links</h3>
          <ul>
            <Link to="/events">
              <li>Upcoming events</li>
            </Link>
            <Link to="/updates">
              <li>Latest News</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </ContentWrapper2>
        <ContentWrapper2 className="mt-12">
          <h3>Contact us</h3>
          <ul>
            <li>
              <a href="mailto:info@marathiassosicationperth.com.au">
                info@marathiassosicationperth.com.au
              </a>
            </li>
            <li>
              <a href="tel:0457849263">0457849263</a>
            </li>
            <li>
              <Link to="https://www.google.com/maps/place/4+Tanga+Cl,+Southern+River+WA+6110,+Australia/@-32.0929672,115.9404304,17z/data=!3m1!4b1!4m6!3m5!1s0x2a329676e89b8605:0xc774920af1791333!8m2!3d-32.0929718!4d115.9426191!16s%2Fg%2F11c12wzvmx">
                4 Tanga Close Southern river
              </Link>
            </li>
          </ul>
        </ContentWrapper2>
      </Wrapper>
      <p className="text-center text-lg mt-[35px] text-[#B6B6B6]">
        © All rights reserved by marathi assosication Perth
      </p>
      <p className="text-center text-lg pt-2 text-[#B6B6B6]">
        website developed by PrimeSoftech
      </p>
    </MainWrapper>
  )
}

const MainWrapper = styled.footer`
  background: #101010;
  color: white;
  padding: 40px 50px 10px 50px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 768px) {
    display: grid;
    justify-items: center;
  }
`
const ContentWrapper1 = styled.div`
  display: grid;
  gap: 30px;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 1.2;
    text-transform: capitalize;
    max-width: 190px;
    margin: 0;
    color: #ffffff;
  }
  p {
    max-width: 356px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-transform: capitalize;
    color: #d3d3d3;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
      max-width: 100%;
    }
  }
`
const ContentWrapper2 = styled.div`
  display: grid;
  gap: 10px;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    text-transform: capitalize;
  }

  ul {
    display: grid;
    gap: 5px;
  }

  li {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    color: #b6b6b6;
    cursor: pointer;
    &:hover {
      color: #ed8f1d;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`

export default Footer
