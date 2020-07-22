import React from 'react';
import { Link as GatsbyLink } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faUtensils, faWineBottle } from '@fortawesome/free-solid-svg-icons'
import useTranslations from '../useTranslations';


const featuredRecipe = ({
    slug,
    background,
    category,
    date,
    timeToRead,
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
  );

  const { minutes, serv, ingred } = useTranslations();

  const postImgCover = listImages.edges.find(img => {
      return img.node.childImageSharp.fluid.src.includes('cover');
  });

  const imgName = image ? image.split('/')[3] : false;

  const postImg = imgName
      ? listImages.edges.find(img => {
          return img.node.childImageSharp.fluid.src.includes(imgName);
      })
      : false;

  return(
    <GatsbyLink to={slug}>
      <div className="pasador">
        <div className="card receta-destacada">
          <Image className="card-img-top" fluid={postImg.node.childImageSharp.fluid} alt="Matcha Coffee"/>
          <div className="card-img-overlay rotate nombre-receta"><p>{title}</p></div>
          <div className="card-body text-right datos-receta-home">
            <p><strong>{preparationTime}</strong> {minutes} <FontAwesomeIcon icon={faStopwatch} /></p>
            <p><strong>{servings}</strong> {serv} <FontAwesomeIcon icon={faUtensils} /></p>
            <p><strong>{ingredients.length}</strong> {ingred} <FontAwesomeIcon icon={faWineBottle} /></p>
          </div>
        </div>
      </div>
    </GatsbyLink>
  );
}

export default featuredRecipe;
