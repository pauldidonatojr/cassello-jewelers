import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2 className="TitleText">Our best sellers</h2>
      </div>
      <div className="section-center featured">
        <Grid container gap={0.5} className="centeringDiv">
          
          <Grid item lg={3.5}>
            <div >
                <Product key={featured[0].id} {...featured[0]} />
            
            </div>
          </Grid>
          <Grid item lg={3.5}>
            <div >
                <Product key={featured[1].id} {...featured[1]} />
              
            </div>
          </Grid>
          <Grid item lg={3.5}>
            <div>
                <Product key={featured[2].id} {...featured[2]} />
            
            </div>
          </Grid>
        
        </Grid>
      </div>

      <Link to="/products">
        <div className="centeringDiv">
          <Button variant="outlined" className="MoreTitle">
            Show All
          </Button>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: "#eeeeee";
  font-family: "Century Gothic", sans-serif;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .centeringDiv {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .MoreTitle {
    text-align: center;
    font-size: 13px;
    height: 60px;
    width: 150px;
    color: #222831;
    border: 4px solid rgb(0,0,0,0.20);
  }

  .MoreTitle:hover {
    background-color: black;
    border: none;
    color: white;
  }

  .TitleText {
    color: grey;
    font-size:50px;
  }
  .btn {
    display: block;
    width: 250px;
    margin: 0 auto;
    text-align: center;
    background-color: #f2ba52;
    color: black;
    font-size: 17px;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
