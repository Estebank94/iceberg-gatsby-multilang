import React from 'react';
import { graphql } from 'gatsby';
import Slider from "react-slick";
import Stamp from '../../images/stamp/sello.png';
import Recipe from '../FeaturedRecipe';


const FeaturedRecipes = ({ data: { allMarkdownRemark } }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          centerPadding: "50px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          centerPadding: "50px",
        }
      }
    ]
  };

  const recipes = allMarkdownRemark.edges;

  return(
    <div className="container">
      <div className="row">
        <div className="col-12 pb-5 pt-5">
          <h1 className="titulo-seccion pt-5 mt-5">Titulo</h1>
          <p className="sub-titulo-seccion azul">Subtitulo</p>
        </div>
      </div>
      <div className="col-12 p-0 m-0">
        <img className="sello" src={Stamp} alt="100% plant-based"/>
          <Slider {...settings}>
            {
              recipes.map((r,index) => <Recipe alt={r.alt} key={index} />)
            }
          </Slider>
      </div>
    </div>
  );
}

export default FeaturedRecipes;

export const query = graphql`
  query Index($locale: String!, $dateFormat: String!, ) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
