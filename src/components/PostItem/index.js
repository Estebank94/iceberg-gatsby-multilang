import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import useTranslations from '../useTranslations';

import * as S from './styled';

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
  image,
}) => {
  const { toRead } = useTranslations();

  const { listImages } = useStaticQuery(
    graphql`
      query {
        listImages: allFile {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1500, maxHeight: 1500) {
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

  return (
      <div className="col-sm-6 col-md-2 pb-5">
          <Img className="img-fluid" fluid={postImg.node.childImageSharp.fluid} alt={title}/>
          <h4 className="text-right receta-titulo pt-3 negro">pink<br/>coffee</h4>
      </div>
  )

  // return (
  //   <S.PostItemLink to={slug}>
  //     <S.PostItemWrapper>
  //       {postImg && (
  //         <Img
  //           fluid={postImg.node.childImageSharp.fluid}
  //           alt={title}
  //         />
  //       )}
  //       {!postImg && (
  //         <S.PostItemImg
  //           fluid={postImgCover.node.childImageSharp.fluid}
  //           alt={title}
  //         />
  //       )}
  //
  //       <S.PostItemInfo>
  //         <S.PostItemTag background={background}>
  //           {category}
  //         </S.PostItemTag>
  //         <S.PostItemDate>
  //           {date} • {timeToRead} min {toRead}
  //         </S.PostItemDate>
  //         <S.PostItemTitle>{title}</S.PostItemTitle>
  //         <S.PostItemDescription>{description}</S.PostItemDescription>
  //       </S.PostItemInfo>
  //     </S.PostItemWrapper>
  //   </S.PostItemLink>
  // );
};

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
