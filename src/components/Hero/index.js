import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from "gatsby"


function Hero() {
    const data = useStaticQuery(graphql`
      query {
            desktop: file(relativePath: { eq: "banners/back-header.jpg" }) {
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
            <div className="row">
                <div className="col-12 p-0">
                    <BackgroundImage
                        className="container-fluid h-100 min-vh-100  m-0 bg-info d-flex cabecera"
                        fluid={imageData}
                        backgroundColor={`#000000`}
                    >
                        <div className="col-6  rotate espacio-cabecera">
                            <h1 className="titulo titulo-header">NOT</h1>
                            <h1 className="titulo titulo-header"><span className="azul">MILK</span></h1>
                            <h1 className="titulo-header titulo cabecera-titulo-2 azul">COFFEE</h1>
                        </div>
                    </BackgroundImage>
                </div>
            </div>
        </div>
    );
}

export default Hero;
