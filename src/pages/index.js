import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import LocalizedLink from '../components/LocalizedLink';
import useTranslations from '../components/useTranslations';
import Banner from '../components/Banner';
import FeaturedRecipes from '../components/FeaturedRecipes';
import AllRecipes from '../components/AllRecipes';


const Index = ({ data: { allMarkdownRemark } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const {
    hello,
    subline,
    category,
    latestPosts,
    allPosts,
  } = useTranslations();

  const postList = allMarkdownRemark.edges;

  return (
    <div className="homepage">
      <SEO title="Home" />
      <Hero />
      <FeaturedRecipes featuredRecipes={postList} />
      <AllRecipes recipes={postList} />
      <Banner />
      {/*<LocalizedLink to={`/blog/`}>{allPosts}</LocalizedLink>*/}
    </div>
  );
};

export default Index;

export const query = graphql`
  query Index($locale: String!) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
            featured
            servings
            preparationTime
            ingredients {
                ingredient
            }
          }
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`;
