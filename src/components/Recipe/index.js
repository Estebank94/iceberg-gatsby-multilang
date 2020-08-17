import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import LocalizedLink from '../LocalizedLink'

const Recipe = ({ slug, title, image, insideRecipe, key }) => {
    const { listImages } = useStaticQuery(
        graphql`
            query {
                listImages: allFile {
                    edges {
                        node {
                            childImageSharp {
                                fluid(maxWidth: 350, maxHeight: 350) {
                                    src
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const imgName = image ? image.split('/')[3] : false

    const postImg = imgName
        ? listImages.edges.find(img => {
              return img.node.childImageSharp.fluid.src.includes(imgName)
          })
        : false

    const columnClass = insideRecipe
        ? 'col-xs-6 col-sm-6 col-md-3 mb-3'
        : 'col-xs-6 col-sm-6 col-md-4 mb-3'

    return (
        <div className={'col mb-3'}>
            <LocalizedLink to={slug}>
                <Image
                    className="img-fluid"
                    fluid={postImg.node.childImageSharp.fluid}
                    alt={title}
                />
                <h4
                    className={
                        insideRecipe
                            ? 'text-left receta-titulo pt-3 negro'
                            : 'text-left receta-titulo pt-3'
                    }
                >
                    {title}
                </h4>
            </LocalizedLink>
        </div>
    )
}

export default Recipe
