import React from 'react'
import Recipe from '../Recipe';
import useTranslations from '../useTranslations';

function Recipes({recipes, insideRecipe }) {

    const { moreToTry, mouthWatering } = useTranslations();

    let allRecipes = recipes;

    if(insideRecipe) {
        allRecipes = recipes.filter(f => !f.node.frontmatter.featured);
    }


  return(
      <div className={insideRecipe ? "container-fluid":"container"}>
          <div className="row">
              <div className="col-12  pt-5 mt-5 pb-5">
                  <h1 className={insideRecipe ? "titulo-seccion negro":"titulo-seccion"}>{moreToTry}</h1>
                  <p className="sub-titulo-seccion azul">{mouthWatering}</p>
              </div>
          </div>
          <div className="row text-center pb-4">
          {allRecipes.map(
              ({
                   node: {
                       frontmatter: {
                           background,
                           category,
                           date,
                           description,
                           title,
                           image,
                       },
                       timeToRead,
                       fields: { slug },
                   },
               }, index) => (
                  <Recipe
                      slug={`/blog/${slug}`}
                      title={title}
                      image={image}
                      insideRecipe={insideRecipe}
                      key={index}
                  />
              ),
          )}
      </div>
    </div>
  );
}

export default Recipes;
