import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import Button from "@mui/material/Button";
import { Filters, ProductList, Sort, PageHero } from "../components";

import heroBcg8 from "../assets/hero-bcg-8.jpg";
import Grid from "@mui/material/Grid";

const AuctionPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <AuctionTitle>Exclusively Available on Auction</AuctionTitle>
      <Card>
        <CardContent>
          <CardImage src={heroBcg8} alt="Auction Product" />
          <AuctionDetails>
            <Price>Premium Diamond Ring</Price>
            <CountdownTimer>
              <TimerLabel>Time Remaining:</TimerLabel>
              <TimerValue>01:23:45</TimerValue>
            </CountdownTimer>
            <Price>$500</Price>

            <BidButton>
              <Button className='b1' variant="contained" color="primary">Checkout Item</Button>
              <Button className='b1' variant="contained" color="primary">LOGIN TO BID</Button>
            </BidButton>
          </AuctionDetails>
        </CardContent>
      </Card>

      <p className="OnAuctionTitle">Products On Auction</p>
      <div style={{ padding: "2rem" }}>
        <ProductList />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 5%;
  background-color: #eeeeee;

  .OnAuctionTitle {
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    margin-top: 100px;
  }
`;

const AuctionTitle = styled.h2`
font-family: "Century Gothic", sans-serif;
  text-align: center;
  font-size: 28px;
  margin-top: 40px;
  @media (max-width: 767px) {
    margin-top: 90px;
  }
`;

const Card = styled.div`
  font-family: "Century Gothic", sans-serif;
  width: 80%;
  margin: 0 auto;
  background-color: #272626;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const CardContent = styled.div`
font-family: "Century Gothic", sans-serif;
  display: flex;
  align-items: center;
  padding: 20px;
  
  @media (max-width: 767px) {
    display: grid;
  }
`;

const CardImage = styled.img`
  width: 40%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const AuctionDetails = styled.div`
font-family: "Century Gothic", sans-serif;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
`;

const CountdownTimer = styled.div`
font-family: "Century Gothic", sans-serif;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TimerLabel = styled.p`
font-family: "Century Gothic", sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  color: white;
`;

const TimerValue = styled.p`
font-family: "Century Gothic", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const Price = styled.p`
font-family: "Century Gothic", sans-serif;
  font-size: 24px;
  font-weight: 200px;
  margin-bottom: 10px;
  color: #A6705D;
`;

const BidButton = styled.div`
font-family: "Century Gothic", sans-serif;
width: 100%;
.b1{
  width: 40%;
  margin-left: 5%;
  background-color:#A6705D;
  &:hover{
    background-color: black;
  }
}

@media (max-width: 767px) {
  .b1{
      width: 95%;
      margin-left: 0%;
      margin-top: 5%;
      background-color:#A6705D;
      &:hover{
        background-color: black;
      }
    }
  }
`;

export default AuctionPage;
