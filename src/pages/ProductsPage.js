import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import Grid from "@mui/material/Grid";
// import moroccan from "../assets/moroccan-flower.png";\
import Button from "@mui/material/Button";
import JewelImage from "../assets/imag-2.jpeg";

import { Filters, ProductList, Sort ,PageHero} from "../components";
const ProductsPage = () => {
  return (
    <>
    <Wrapper>
    <main className="OlderVersion">
      <Navbar />

      <Wrapper className="page">
        <PageHero title='products' />
        <div className="section-center products">
          <Filters />
          
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
    </Wrapper>

    <Wrapper  >
      <div className="NewVersion">
      <Navbar />
      <Grid container gap={1} className="CenteringDiv">
      
        <Grid item xs={2}>
         
          <Filters />
        </Grid>
        <Grid item xs={7}>
          <Grid container gap={1} className="CenteringDiv">
            <Grid item xs={12}>
              <div>
              <Sort />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div >
              <ProductList />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          
          <div className="AuctioBanner">
          {/* <img src={"https://images.unsplash.com/photo-1503480207415-fdddcc21d5fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"} className="BannerImage" /> */}
          
          <p className="AuctionTitle">Join the Auction Action Now!</p>

          <div className="ImageHolder">
          <img src={JewelImage} className="Image1"/>
          <img src={JewelImage} className="Image2"/>
          </div>
          <div className="ImageHolder">
          <img src={JewelImage} className="Image1"/>
          <img src={JewelImage} className="Image2"/>
          </div>

          <Button variant="outlined" className="MoreTitle2" >
          Place a bid
        </Button>


          </div>

        </Grid>
        
      
      </Grid>
      </div>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: "#eeeeee";
  overflow:hidden;
 
  .AuctioBanner{
    height:100vh;
    width:100%;
    border-radius:10px;
    background-color:rgb(0,0,0,1);
    position:relative;
    padding:5%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .MoreTitle2{
    height:50px;
    width:75%;
    background-color:#BF0426;
    border:none;
    outline:none;
    color:white;
    font-weight:1000;
  }
  .AuctionTitle{
    font-size:45px;
    color:white;
    font-weight:1000;
    text-align:center;
    z-index:10;
  }
  .Image1{
    width:50%;
    background:none;

  }
  .Image2{
    width:45%;
    background:none;
    right:0%;
  }
  .ImageHolder{
    position:relative;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }

  .BannerImage{
    height:100%;
    width:100%;
    border-radius:7px;
    position:absolute;
    object-fit:cover;
    z-index:-10;
  }

  .CenteringDiv {
    margin-top:5%;
    margin-bottom:5%;
    display:flex;
    justify-content: center;
  }
  
  .OlderVersion{
    display:none;
  }

  @media (max-width: 767px) {
    margin-bottom:5%;
    .products {
      display: flex;
      flex-direction:column;
    }
    .NewVersion{
      display:none;
    }
    .OlderVersion{
      display:unset;
    }
  }
  @media (min-width: 800px) and (max-width: 950px) {
    .products {
      display: flex;
      flex-direction:column;
    }
    .NewVersion{
      display:none;
    }
    .OlderVersion{
      display:unset;
    }
  }
`;

export default ProductsPage;
