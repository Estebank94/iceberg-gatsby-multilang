import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

function Banner() {

  const data = useStaticQuery(graphql`
  query {
        desktop: file(relativePath: { eq: "banners/back-banner.jpg" }) {
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
      <BackgroundImage
        className="row text-center p-5 banner"
        fluid={imageData}
        backgroundColor={`#17A2DB`}
      >
        <div className="col-sm-3"/>
        <div className="col-sm-3">
          <h2 className="titulo-banner"><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="pb-3"/><br/>Donde comprar</h2>
        </div>
        <div className="col-sm-3 ">
          <h2 className="titulo-banner"><FontAwesomeIcon icon={faTimes} size="2x" className="pb-3"/><br/>Conoce otros<span
            className="negro"> NOT</span>Productos</h2>
        </div>
        <div className="col-sm-3 ">
          <h2 className="titulo-banner"><FontAwesomeIcon icon={faEnvelope} size="2x" className="pb-3"/><br/>Compartilo</h2>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Banner;
