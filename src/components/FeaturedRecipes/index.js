import React from 'react'
import Slider from 'react-slick'
import Stamp from '../../images/stamp/sello.png'
import Recipe from '../FeaturedRecipe'
import useTranslations from '../useTranslations'


const FeaturedRecipes = ({ featuredRecipes }) => {

    const { theFavs, checkOut } = useTranslations()

    console.log('featuredRecipies', featuredRecipes)

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                    centerPadding: '40px',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                    centerPadding: '40px',
                },
            },
        ],
    }

    return (
        <div className="container featured extra-padding">
            <div className="row">
                <div className="col-12 pb-5 pt5 featured-title">
                    <h1 className="titulo-seccion pt-5 mt-5">{theFavs}</h1>
                    <p className="sub-titulo-seccion azul">{checkOut}</p>
                </div>
            </div>
            <div className="col-12 p-0 m-0">
                <img className="sello" src={Stamp} alt="100% plant-based"/>
                <Slider {...settings}>
                    {featuredRecipes.filter(f => f.node.frontmatter.featured).map(
                        ({
                             node: {
                                 frontmatter: {
                                     title,
                                     image,
                                     ingredients,
                                     servings,
                                     preparationTime,
                                 },
                                 fields: { slug },
                             },
                         }) => (
                            <Recipe
                                slug={`/blog/${slug}`}
                                title={title}
                                image={image}
                                ingredients={ingredients}
                                servings={servings}
                                preparationTime={preparationTime}
                            />
                        ),
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default FeaturedRecipes
