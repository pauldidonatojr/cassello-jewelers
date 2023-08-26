import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import { motion } from 'framer-motion';
import styled from "styled-components";
import heroBcg3 from "../assets/hero-bcg-3.jpg";
import heroBcgt from "../assets/hero-bcg-2.jpg";
import heroBcg4 from "../assets/hero-bcg-4.jpg";
import heroBcg5 from "../assets/hero-bcg-5.jpg";
import heroBcg8 from "../assets/hero-bcg-8.jpg";

import image_2 from "../assets/image-3.jpg";
import image_3 from "../assets/image-4.jpeg";
import image_4 from "../assets/image-5.png";

const DekstopImages = () => {
    const [loading, setLoading] = useState(true);
    const [allLoaded, setAllLoaded] = useState(false);

    useEffect(() => {
        // Check if all loading states are false
        if (!loading) {
            setAllLoaded(true);
        } else {
            setAllLoaded(false);
        }
    }, [loading]);

    function handleLoad() {
        setLoading(false);
    }

    return (
        <Wrapper>
            <div style={{ width: "100%", height: "100%", backgroundColor: "white", zIndex: 0 }}>
                {allLoaded && (
                    <div className="ProgressHolder">
                        <CircularProgress
                            style={{ height: 200, width: 200, color: "grey" }}
                        />
                    </div>
                )}
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container sx={{ flexGrow: 1, backgroundColor: 'purple', height: '90vh', width: '100%' }}>
                        <Grid sx={{ width: "100%", height: "50%" }} item xs={8}>
                            <div className="i1">
                            <img
                                src={heroBcg3}
                                className="image1"
                            />
                            </div>
                        </Grid>
                        <Grid sx={{ width: "100%", height: "50%", backgroundColor: 'silver', display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={4}>
                        <div className="i1">
                            <img
                                src={heroBcgt}
                                className="image1"
                            />
                            </div>
                        </Grid>
                        <Grid sx={{ width: "100%", height: "50%", backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={4}>
                        <div className="i1">
                            <img
                                src={heroBcg5}
                                className="image1"
                            />
                            </div>
                        </Grid>
                        <Grid sx={{ width: "100%", height: "50%", backgroundColor: 'green' }} item xs={8}>
                        <div className="i1">
                            <img
                                src={heroBcg8}
                                className="image1"
                            />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;

box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
.i1 {
    background: white;
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0.3rem;
}
.image1{ 
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

export default DekstopImages;
