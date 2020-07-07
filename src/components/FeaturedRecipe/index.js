import React from 'react';
import { Link as GatsbyLink } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faUtensils, faWineBottle } from '@fortawesome/free-solid-svg-icons'


const featuredRecipe = ({
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
    image,
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
    <GatsbyLink to={"/dalgona-coffee"}>
      <div className="pasador">
        <div className="card receta-destacada">
          <Image className="card-img-top" fluid={postImg.node.childImageSharp.fluid} alt="Matcha Coffee"/>
          <div className="card-img-overlay rotate nombre-receta"><p>{title}</p></div>
          <div className="card-body text-right datos-receta-home">
            <p><strong>15</strong> minutes <FontAwesomeIcon icon={faStopwatch} /></p>
            <p><strong>5</strong> servings <FontAwesomeIcon icon={faUtensils} /></p>
            <p><strong>4</strong> ingredients <FontAwesomeIcon icon={faWineBottle} /></p>
          </div>
        </div>
      </div>
    </GatsbyLink>
  );
}

export default featuredRecipe;
