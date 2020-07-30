import React from 'react'
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faUtensils, faWineBottle } from '@fortawesome/free-solid-svg-icons'
import useTranslations from '../useTranslations'


const featuredRecipe = ({
                            slug,
                            title,
                            description,
                            image,
                            preparationTime,
                            ingredients,
                            servings,
                        }) => {
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

    const { minutes, serv, ingred } = useTranslations()

    const postImgCover = listImages.edges.find(img => {
        return img.node.childImageSharp.fluid.src.includes('cover')
    })

    const imgName = image ? image.split('/')[3] : false

    const postImg = imgName
        ? listImages.edges.find(img => {
            return img.node.childImageSharp.fluid.src.includes(imgName)
        })
        : false

    return (
        <GatsbyLink to={slug}>
            <div className="pasador">
                <div className="card receta-destacada">
                    <Image className="card-img-top" fluid={postImg.node.childImageSharp.fluid} alt="Matcha Coffee"/>
                    <div className="card-img-overlay rotate nombre-receta"><p>{title}</p></div>
                    <div className="card-body datos-receta-home row justify-content-between">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faStopwatch} className="mb-2"/>
                            <p className="featured-recipe-attribute"><strong><span
                                className="recipe-number">{preparationTime}</span> {minutes}</strong></p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faUtensils} className="mb-2"/>
                            <p className="featured-recipe-attribute"><strong> <span
                                className="recipe-number">{servings}</span> {serv}</strong></p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faWineBottle} className="mb-2"/>
                            <p className="featured-recipe-attribute"><strong><span
                                className="recipe-number">{ingredients.length}</span> {ingred}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </GatsbyLink>
    )
}

export default featuredRecipe
