import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import RecipeHero from '../components/RecipeHero'
import RecipeInfo from '../components/RecipeInfo'
import AllRecipes from '../components/AllRecipes'
import Banner from '../components/Banner'
import useTranslations from '../components/useTranslations'


const Post = props => {
    const post = props.data.markdownRemark
    const recipes = props.data.allMarkdownRemark.edges

    const {
        description
    } = useTranslations()

    return (
        <div className="recipe-page">
            <SEO
                title={post.frontmatter.title}
                description={description}
                recipe={{
                    name: post.frontmatter.title,
                    author: post.frontmatter.author,
                    image: post.frontmatter.image,
                    prepTime: post.frontmatter.preparationTime,
                    ingredients: post.frontmatter.ingredients,
                    recipeYield: post.frontmatter.servings + ' servings',
                }}
            />
            <RecipeHero
                title={post.frontmatter.title}
                author={post.frontmatter.author}
                image={post.frontmatter.image}
                gallery={post.frontmatter.gallery}
                location={props.location}
            />
            <RecipeInfo
                preparationTime={post.frontmatter.preparationTime}
                ingredients={post.frontmatter.ingredients}
                servings={post.frontmatter.servings}
                html={post.html}
            />
            <AllRecipes recipes={recipes} insideRecipe/>
            <Banner/>
        </div>
    )
}


export const query = graphql`
  query Post($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        author 
        image
        servings
        gallery
        preparationTime
        ingredients {
          ingredient
          amount
        }
      }
      html
    }
    allMarkdownRemark(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: {regex: "/(recipes)/.*\\.md$/"}
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
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

export default Post
