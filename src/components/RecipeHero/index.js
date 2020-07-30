import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import stamp from '../../images/stamp/sello-receta.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

function Hero({ title, author, image, location }) {

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
      `,
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

    const shareData = {
        title: 'Chequeá esta receta con NotMilk!',
        text: { title },
        url: location.href,
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-6 receta-izquierda">
                    <h3 className="share-receta rotate" onClick={() => navigator.share(shareData)}><span
                        className="mr-2">Share</span> <FontAwesomeIcon icon={faFacebookSquare}/> <FontAwesomeIcon
                        icon={faInstagram}/> <FontAwesomeIcon icon={faShareAlt}/></h3>
                    <div className="texto-principal">
                        <h1 className="titulo-receta">NOT<br/>
                            <span className="azul">{title}</span>
                        </h1>
                        <p className="subtitulo-receta azul">{author}</p>
                    </div>
                </div>
                <BackgroundImage
                    className="col-sm-12 col-md-6 receta-derecha"
                    fluid={postImg.node.childImageSharp.fluid}
                >
                    <img className="sello-receta" src={stamp} alt="100% plant-based"/>
                    <p className="desc-receta">
                        <span className="lactose-strike-through">Lactose</span>
                        <br/>
                        <span className="gluten-strike-through">Gluten</span>
                        <br/>
                        <span className="nut-strike-through">Nut</span>
                    </p>
                </BackgroundImage>
            </div>
        </div>
    )
}

export default Hero
