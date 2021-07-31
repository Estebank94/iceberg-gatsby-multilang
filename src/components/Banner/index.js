import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import useTranslations from '../useTranslations'
import contact from '../../images/icons/contact.svg'
import cross from '../../images/icons/cross.svg'
import location from '../../images/icons/location.svg'
import { Link as GatsbyLink } from 'gatsby'

function Banner() {
    const {
        whereToBuy,
        knowMore,
        sendYourSpecialty,
        products,
    } = useTranslations()

    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "banners/notmilk.png" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 300) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const imageData = data.desktop.childImageSharp.fluid

    return (
        <div className="container-fluid">
            <div className="row text-center p-4 banner d-flex align-items-center">
                <div className="col-sm-3 d-none d-xl-block d-lg-block d-md-block">
                    <Image fluid={imageData} className="banner-pack mx-auto" />
                </div>
                <div className="col-sm-3">
                    <a href="https://notco.com/where-to-buy">
                        <h2 className="titulo-banner">
                            <img src={location} className="pb-3" alt="where-to-buy" />
                            <br />
                            {whereToBuy}
                        </h2>
                    </a>
                </div>
                <div className="col-sm-3">
                    <a href="https://notco.com/#products">
                        <h2 className="titulo-banner">
                            <img src={cross} className="pb-3" alt="NotCo Logo" />
                            <br />
                            {knowMore}
                            <span className="negro"> NOT</span>
                            {products}
                        </h2>
                    </a>
                </div>
                <div className="col-sm-3">
                    <a href="http://notco.com/#contact">
                        <h2 className="titulo-banner">
                            <img src={contact} className="pb-3" alt="Send your specialty" />
                            <br />
                            {sendYourSpecialty}
                        </h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner
