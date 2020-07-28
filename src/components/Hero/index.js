import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Stamp from '../../images/stamp/sello.png';
import { graphql, useStaticQuery } from "gatsby"


function Hero() {
    const data = useStaticQuery(graphql`
      query {
            desktop: file(relativePath: { eq: "banners/main-image.jpg" }) {
              childImageSharp {
                fluid(quality: 70, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
       }
    `)

    const imageData = data.desktop.childImageSharp.fluid;

    return(
        <div className="container-fluid">
            <div className="hero-title">
                <h1 className="titulo hero">NOT<span className="azul">MILK</span></h1>
            </div>
            <div className="rotate right-top hero-subtitle">
                <img className="sello hero" src={Stamp} alt="100% plant-based"/>
                <h1 className="titulo-header titulo cabecera-titulo-2 azul">COFFEE</h1>
            </div>
            <div className="row">
                <div className="col-12 p-0">
                    <BackgroundImage
                        className="container-fluid min-vh-100  m-0 bg-info d-flex cabecera"
                        fluid={imageData}
                        backgroundColor={`#000000`}
                    >

                    </BackgroundImage>
                </div>
            </div>
        </div>
    );
}

export default Hero;
