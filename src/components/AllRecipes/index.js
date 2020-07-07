import React from 'react'
import Recipe from '../Recipe';

function Recipes({recipes}) {

  return(
      <div className="container">
          <div className="row">
              <div className="col-12  pt-5 mt-5 pb-5">
                  <h1 className="titulo-seccion">sdfsdfsd</h1>
                  <p className="sub-titulo-seccion azul">sdsd</p>
              </div>
          </div>
          <div className="row text-center pb-4">
          {recipes.map(
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
               }) => (
                  <Recipe
                      slug={`/blog/${slug}`}
                      background={background}
                      category={category}
                      date={date}
                      timeToRead={timeToRead}
                      title={title}
                      description={description}
                      image={image}
                  />
              ),
          )}
      </div>
    </div>
  );
}

export default Recipes;
