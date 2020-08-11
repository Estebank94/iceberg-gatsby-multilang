import React from 'react'
import Slider from 'react-slick'
import { LocaleContext } from '../Layout';
import Stamp from '../../images/stamp/en-base-a-plantas-white.png'
import Recipe from '../FeaturedRecipe'
import useTranslations from '../useTranslations'
import stampEs from '../../images/stamp/en-base-a-plantas-white.png'
import stampPt from '../../images/stamp/feito-de-plantas-white.png'
import stampEn from '../../images/stamp/made-from-plants-white.png'

const FeaturedRecipes = ({ featuredRecipes }) => {
    const { theFavs, checkOut } = useTranslations()

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

    const { locale } = React.useContext(LocaleContext);

    const getStamp = (locale) => {
        if(locale === 'es') {
            return stampEs;
        } else if (locale === 'pt') {
            return stampPt;
        } else {
            return stampEn;
        }
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
                <img className="sello" src={getStamp(locale)} alt="100% plant-based" />
                <Slider {...settings}>
                    {featuredRecipes
                        .filter(f => f.node.frontmatter.featured)
                        .map(
                            ({
                                node: {
                                    frontmatter: {
                                        title,
                                        image,
                                        ingredients,
                                        servings,
                                        preparationTime,
                                        gallery
                                    },
                                    fields: { slug },
                                },
                            }) => (
                                <Recipe
                                    slug={`/recipes/${slug}`}
                                    title={title}
                                    image={image}
                                    ingredients={ingredients}
                                    servings={servings}
                                    preparationTime={preparationTime}
                                    gallery={gallery}
                                />
                            )
                        )}
                </Slider>
            </div>
        </div>
    )
}

export default FeaturedRecipes
