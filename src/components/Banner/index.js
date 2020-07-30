import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import useTranslations from '../useTranslations'
import contact from '../../images/icons/contact.svg'
import cross from '../../images/icons/cross.svg'
import location from '../../images/icons/location.svg'

function Banner() {

    const { whereToBuy, knowMore, sendYourSpecialty, products } = useTranslations()

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

    const imageData = data.desktop.childImageSharp.fluid

    return (
        <div className="container-fluid">
            <BackgroundImage
                className="row text-center p-5 banner"
                fluid={imageData}
                backgroundColor={`#17A2DB`}
            >
                <div className="col-sm-3"/>
                <div className="col-sm-3">
                    <h2 className="titulo-banner"><img src={location} className="pb-3"/><br/>{whereToBuy}</h2>
                </div>
                <div className="col-sm-3 ">
                    <h2 className="titulo-banner"><img src={cross} className="pb-3"/><br/>{knowMore}<span
                        className="negro"> NOT</span>{products}</h2>
                </div>
                <div className="col-sm-3 ">
                    <h2 className="titulo-banner"><img src={contact} className="pb-3"/><br/>{sendYourSpecialty}</h2>
                </div>
            </BackgroundImage>
        </div>
    )
}

export default Banner
