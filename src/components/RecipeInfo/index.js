import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStopwatch,
    faUtensils,
    faWineBottle,
} from '@fortawesome/free-solid-svg-icons'
import useTranslations from '../useTranslations'
import BackgroundImage from 'gatsby-background-image/index'
import { graphql, useStaticQuery } from 'gatsby'

function Info({ ingredients, preparationTime, servings, html }) {
    const { minutes, serv, ingred, instructions } = useTranslations()

    const data = useStaticQuery(graphql`
        query {
            desktop: file(relativePath: { eq: "recipies/back-receta-prod.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const imageData = data.desktop.childImageSharp.fluid

    return (
        <div className="container-fluid">
            <div className="row">
                <BackgroundImage fluid={imageData} className="col-md-12 col-lg-6 detalle-izquierda">
                    <div className="iconos-receta">
                        <p className="listado-receta">
                            <FontAwesomeIcon
                                icon={faStopwatch}
                                className="pr-2"
                            />
                            {preparationTime} {minutes}
                        </p>
                        <p className="listado-receta">
                            <FontAwesomeIcon
                                icon={faUtensils}
                                className="pr-2"
                            />
                            {servings} {serv}
                        </p>
                        <p className="pb-2">
                            <FontAwesomeIcon
                                icon={faWineBottle}
                                className="pr-2"
                            />
                            {ingredients.length} {ingred}
                        </p>
                        <p className="listado-receta mb-2 text-capitalize">{ingred}:</p>
                        {ingredients.map((ingredient, index) => (
                            <p className="descripcion-info-receta" key={index}>
                                {ingredient.amount}{' '}
                                {ingredient.ingredient === 'Not Milk' ? (
                                    <strong>
                                        <span className="negro">NOT</span>MILK
                                    </strong>
                                ) : (
                                    ingredient.ingredient
                                )}
                            </p>
                        ))}
                    </div>
                </BackgroundImage>

                <div className="col-md-12 col-lg-6 mt-3 detalle-derecha">
                    <div className="parrafos-receta">
                        <p className="titulo-instrucciones mb-2 text-capitalize">{instructions}</p>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
