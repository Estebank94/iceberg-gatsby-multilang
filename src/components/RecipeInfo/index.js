import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faUtensils, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import useTranslations from '../useTranslations';

function Info({ ingredients, preparationTime, servings, html }) {

  const { minutes, serv, ingred } = useTranslations();

  console.log('ingredients', ingredients);

  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 detalle-izquierda">
          <div className="iconos-receta">
            <p className="listado-receta"><FontAwesomeIcon icon={faStopwatch} className="pr-2"/>{preparationTime} {minutes}</p>
            <p className="listado-receta"><FontAwesomeIcon icon={faUtensils} className="pr-2"/>{servings} {serv}</p>
            <p className="pb-4"><FontAwesomeIcon icon={faWineBottle} className="pr-2"/>{ingredients.length} {ingred}</p>
            <p className="descripcion-info-receta"><strong><span className="negro">NOT</span>MILK</strong></p>
            {
              ingredients.map((ingredient, index) => <p className="descripcion-info-receta" key={index}>{ingredient.amount} {ingredient.ingredient}</p>)
            }
          </div>
        </div>

        <div className="col-sm-12 col-md-6 detalle-derecha">
          <div className="parrafos-receta">
              <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Info;
