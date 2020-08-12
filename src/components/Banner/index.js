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
                    fluid(quality: 70, maxWidth: 300) {
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
                    <GatsbyLink to="https://notco.com/where-to-buy">
                        <h2 className="titulo-banner">
                            <img src={location} className="pb-3" />
                            <br />
                            {whereToBuy}
                        </h2>
                    </GatsbyLink>
                </div>
                <div className="col-sm-3">
                    <GatsbyLink to="https://notco.com/#products">
                        <h2 className="titulo-banner">
                            <img src={cross} className="pb-3" />
                            <br />
                            {knowMore}
                            <span className="negro"> NOT</span>
                            {products}
                        </h2>
                    </GatsbyLink>
                </div>
                <div className="col-sm-3">
                    <GatsbyLink to="http://notco.com/#contact">
                        <h2 className="titulo-banner">
                            <img src={contact} className="pb-3" />
                            <br />
                            {sendYourSpecialty}
                        </h2>
                    </GatsbyLink>
                </div>
            </div>
        </div>
    )
}

export default Banner
