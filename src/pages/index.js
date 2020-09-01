import React from 'react'
import { graphql } from 'gatsby'
import { LocaleContext } from '../components/Layout';
import SEO from '../components/seo'
import Hero from '../components/Hero'
import LocalizedLink from '../components/LocalizedLink'
import useTranslations from '../components/useTranslations'
import Banner from '../components/Banner'
import FeaturedRecipes from '../components/FeaturedRecipes'
import AllRecipes from '../components/AllRecipes'


const Index = ({ data: { allMarkdownRemark } }) => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const {
        titleSite,
        description
    } = useTranslations()

    const { locale } = React.useContext(LocaleContext);

    const loc = locale === 'en' ? '' : (locale === 'es' ? '/es' : '/pt');

    const postList = allMarkdownRemark.edges

    let postItemsSEO = []

    postList.map((post, index) => postItemsSEO.push(
        {
            "@type": "ListItem",
            "position": index + 1,
            "url": "https://notmilk.coffee/recipes/" + post.node.fields.slug,
            "image": "https://relaxed-gates-6dd431.netlify.app" + loc + post.node.frontmatter.image
        }
    ))

    return (
        <div className="homepage">
            <SEO title={titleSite} description={description} homePage posts={postItemsSEO} />
            <Hero />
            <FeaturedRecipes featuredRecipes={postList} />
            <AllRecipes recipes={postList} />
            <Banner />
        </div>
    )
}

export default Index

export const query = graphql`
  query Index($locale: String!) {
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(recipes)\/.*\\.md$/"}
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
            gallery
          }
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`
