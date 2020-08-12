import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import stampEs from '../../images/stamp/en-base-a-plantas-white.png'
import stampPt from '../../images/stamp/feito-de-plantas-white.png'
import stampEn from '../../images/stamp/made-from-plants-white.png'
import { LocaleContext } from '../Layout'

function Hero() {
    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "banners/main-image.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            mobile: file(relativePath: { eq: "banners/main-image.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const sources = [
        data.mobile.childImageSharp.fluid,
        {
            ...data.desktop.childImageSharp.fluid,
            media: `(min-width: 768px)`,
        },
    ]

    const { locale } = React.useContext(LocaleContext)

    const getStamp = locale => {
        if (locale === 'es') {
            return stampEs
        } else if (locale === 'pt') {
            return stampPt
        } else {
            return stampEn
        }
    }

    return (
        <div className="container-fluid p-0">
            <div className="hero-title">
                <h1 className="titulo hero">
                    NOT<span className="azul">MILK</span>
                </h1>
            </div>
            <div className="rotate right-top hero-subtitle">
                <img
                    className="sello hero"
                    src={getStamp(locale)}
                    alt="100% plant-based"
                />
                <h1 className="titulo-header titulo cabecera-titulo-2 azul">
                    COFFEE
                </h1>
            </div>
            <Image
                className="container-fluid min-vh-100  m-0 bg-info d-flex cabecera"
                fluid={sources}
                backgroundColor={`#000000`}
            />
        </div>
    )
}

export default Hero
