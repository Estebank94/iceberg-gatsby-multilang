import React from 'react';
import { Link as GatsbyLink } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image'


const Recipe = ({ slug, title, image, insideRecipe }) => {

    const { listImages } = useStaticQuery(
        graphql`
        query {
          listImages: allFile {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400) {
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

    const imgName = image ? image.split('/')[3] : false;

    const postImg = imgName
        ? listImages.edges.find(img => {
            return img.node.childImageSharp.fluid.src.includes(imgName);
        })
        : false;

  return(
    <div className={insideRecipe? "col-sm-6 col-md-3 pb-5":"col-sm-6 col-md-4 pb-5"}>
        <GatsbyLink to={slug}>
          <Image className="img-fluid" fluid={postImg.node.childImageSharp.fluid} alt="recetas"/>
          <h4 className={insideRecipe ? "text-left receta-titulo pt-3 negro" : "text-left receta-titulo pt-3"}>{title}</h4>
        </GatsbyLink>
    </div>
  );
}

export default Recipe;
