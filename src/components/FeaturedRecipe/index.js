import React from 'react';
import { Link as GatsbyLink } from "gatsby"
import Image from "./featuredRecipieThumb"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faUtensils, faWineBottle } from '@fortawesome/free-solid-svg-icons'


const featuredRecipe = (props) => (
  <GatsbyLink to={"/dalgona-coffee"}>
    <div className="pasador">
      <div className="card receta-destacada">
        <Image className="card-img-top" index={props.index} alt="Matcha Coffee"/>
        <div className="card-img-overlay rotate nombre-receta"><p>MATCHA COFFEE</p></div>
        <div className="card-body text-right datos-receta-home">
          <p><strong>15</strong> minutes <FontAwesomeIcon icon={faStopwatch} /></p>
          <p><strong>5</strong> servings <FontAwesomeIcon icon={faUtensils} /></p>
          <p><strong>4</strong> ingredients <FontAwesomeIcon icon={faWineBottle} /></p>
        </div>
      </div>
    </div>
  </GatsbyLink>
);

export default featuredRecipe;
