import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Slider from 'react-slick'
import stampEs from '../../images/stamp/en-base-a-plantas-black.png'
import stampEn from '../../images/stamp/made-from-plants-black.png'
import stampPt from '../../images/stamp/feito-de-plantas-black.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookSquare,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { LocaleContext } from '../Layout';


function Hero({ title, author, image, location, gallery }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: false,
        autoplay: false,
        dots: true,
        dotsClass: "slick-dots recipe-dots",
        className: 'recipe-slider',
        arrows: false,
    }

    const { listImages } = useStaticQuery(
        graphql`
            query {
                listImages: allFile {
                    edges {
                        node {
                            childImageSharp {
                                fluid(maxWidth: 1000, maxHeight: 1000) {
                                    src
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const postImgCover = listImages.edges.find(img => {
        return img.node.childImageSharp.fluid.src.includes('cover')
    })

    const imgName = image ? image.split('/')[3] : false

    const postImg = imgName
        ? listImages.edges.find(img => {
              return img.node.childImageSharp.fluid.src.includes(imgName)
          })
        : false

    const findImage = image => {
        const imgName = image ? image.split('/')[3] : false

        const postImg = imgName
            ? listImages.edges.find(img => {
                  return img.node.childImageSharp.fluid.src.includes(imgName)
              })
            : false
        return postImg.node.childImageSharp.fluid
    }

    const shareData = {
        title: 'Chequeá esta receta con NotMilk!',
        text: { title },
        url: location.href,
    }

    const { locale } = React.useContext(LocaleContext);

    const getStamp = (locale) => {
        if(locale === 'es') {
            return stampEs;
        } else if (locale === 'pt') {
            return stampPt;
        } else {
            return stampEn;
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-6 receta-izquierda">
                    <h3
                        className="share-receta rotate"
                        onClick={() => navigator.share(shareData)}
                    >
                        <span className="mr-2">Share</span>{' '}
                        <FontAwesomeIcon icon={faFacebookSquare} />{' '}
                        <FontAwesomeIcon icon={faInstagram} />{' '}
                        <FontAwesomeIcon icon={faShareAlt} />
                    </h3>
                    <div className="texto-principal">
                        <h1 className="titulo-receta">
                            NOT
                            <br />
                            <span className="azul">{title}</span>
                        </h1>
                        <p className="subtitulo-receta azul">{author}</p>
                    </div>
                </div>
                <img
                    className="sello-receta"
                    src={getStamp(locale)}
                    alt="100% plant-based"
                />
                <p className="desc-receta">
                    <span className="lactose-strike-through">Lactose</span>
                    <br />
                    <span className="gluten-strike-through">Gluten</span>
                    <br />
                    <span className="nut-strike-through">Nut</span>
                </p>
                <div className="col-sm-12 col-md-6 p-0 m-0">
                    <Slider {...settings}>
                        {gallery.map((image, index) => (
                            <Image
                                style={{ margin: 0, padding: 0 }}
                                className="receta-derecha"
                                fluid={findImage(image)}
                                key={index}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero
