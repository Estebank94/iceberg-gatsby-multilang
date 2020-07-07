import React from 'react';
import { Link as GatsbyLink } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image'


const Recipe = ({
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

    <div className="col-sm-6 col-md-3 pb-5">
        <GatsbyLink to={slug}>
          <Image className="img-fluid" fluid={postImg.node.childImageSharp.fluid} alt="recetas"/>
          <h4 className="text-right receta-titulo pt-3">pink<br/>coffee</h4>
        </GatsbyLink>
    </div>
  );
}

export default Recipe;
