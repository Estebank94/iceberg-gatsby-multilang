import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStopwatch,
    faUtensils,
    faWineBottle,
} from '@fortawesome/free-solid-svg-icons'
import useTranslations from '../useTranslations'

function Info({ ingredients, preparationTime, servings, html }) {
    const { minutes, serv, ingred, instructions } = useTranslations()

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-lg-6 detalle-izquierda">
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
                </div>

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
