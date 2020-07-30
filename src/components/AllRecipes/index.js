import React from 'react'
import Recipe from '../Recipe'
import useTranslations from '../useTranslations';
import useWindowDimensions from '../../utils/resize';

function Recipes({ recipes, insideRecipe }) {

    const { width } = useWindowDimensions();

    const { moreToTry, mouthWatering } = useTranslations()

    let allRecipes = recipes

    if (!insideRecipe) {
        allRecipes = recipes.filter(f => !f.node.frontmatter.featured)
    }

    const columns = width >= 800 ?
        (insideRecipe ? "row row-cols-5 text-center pb-4" : "row row-cols-3 text-center pb-4") : "row row-cols-2 text-center pb-4";

    return (
        <div className={insideRecipe ? 'container-fluid' : 'container'}>
            <div className="row">
                <div className="col-12  pt-5 mt-5 pb-5">
                    <h1 className={insideRecipe ? 'titulo-seccion negro' : 'titulo-seccion'}>{moreToTry}</h1>
                    <p className="sub-titulo-seccion azul">{mouthWatering}</p>
                </div>
            </div>
            <div
                className={columns}>
                {allRecipes.map(
                    ({
                         node: {
                             frontmatter: {
                                 title,
                                 image,
                             },
                             fields: { slug },
                         },
                     }, index) => (
                        <Recipe
                            slug={`/blog/${slug}`}
                            title={title}
                            image={image}
                            key={index}
                            insideRecipe={insideRecipe}
                        />
                    ),
                )}
            </div>
        </div>
    )
}

export default Recipes
