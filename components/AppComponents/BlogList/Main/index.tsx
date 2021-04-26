import React from "react";
import styled from "styled-components";
import { Button, Fade, SvgIcon, Tooltip } from "@material-ui/core";
import {
  AccessTime,
  AccessTimeOutlined,
  AccessTimeTwoTone,
  Add,
} from "@material-ui/icons";
import Link from "next/link";
import { BlogPostType } from "../../../../@types";
import converToSlug from "../../../../helper/convertToSlug";
import readingTime from "../../../../helper/readTime";

const PostListRoot = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
  position: relative;
`;

const PostListDetailOne = styled.img`
  width: 150px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-65px);

  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const PostListDetailTwo = styled.img`
  height: 150px;
  width: 45px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-75px, -50px);

  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const PostListSectionTitle = styled.div`
  font-size: 24px;
  color: initial;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-top: 5%;
  padding-bottom: 5%;
  font-weight: 700;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const PostListContainer = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
  display: grid;
  grid-template-rows: 1fr;
  align-content: center;
  justify-items: center;
  @media (min-width: 1024px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const PostCardAncientRoot = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const PostCardContainer = styled.div`
  font-family: "Roboto";
`;

interface PostCardProps {
  img: string;
}

const PostCard = styled.div<PostCardProps>`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 320px;
  height: 228px;
  @media (min-width: 1024px) {
    width: 400px;
    height: 280px;
  }
`;

const PostCardReadTimeContainer = styled.div`
  display: flex;
  padding-bottom: 15px;
  & .MuiSvgIcon-root {
    fill: #da4e49;
  }
  & .timer {
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 500;
  }
`;

const PostTitle = styled.div`
  color: #2a3d45;
  font-family: "Roboto";
  font-size: 20px;
  width: 320px;
  padding-top: 15px;
  font-weight: 600;
  @media (min-width: 1024px) {
    width: 400px;
    font-size: 26px;
  }
`;

const PostAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  .posterData {
    margin-left: 15px;
    .authorName {
      font-weight: 600;
      padding-bottom: 5px;
    }
  }
`;

const PostAuthorIconContainer = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  transform: translateX(-5px);
  .outer-circle {
    width: 60px;
    height: 60px;
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
    border: ${(props) => `3px dashed #333`};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      font-weight: 700;
      color: #da4e49;
    }
  }
`;

const BlogShowMoreButtonContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #da4e49;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 1.85em;
  }
`;

interface PostCardMainProps extends Partial<BlogPostType> {
  readTime?: string;
}

const PostCardMain = ({
  blogActive,
  blogPost,
  blogTitle,
  featuredImage = {
    imageURL: "https://via.placeholder.com/1000",
    imageDescription: "placeholder description",
  },
  uuid,
  readTime = "10",
}: PostCardMainProps) => {
  return (
    <div>
      <PostCardAncientRoot>
        <PostCardReadTimeContainer>
          <SvgIcon component={AccessTime} />
          <div className="timer">
            {readTime} {parseInt(readTime) <= 1 ? "minuto" : "minutos"} de
            leitura
          </div>
        </PostCardReadTimeContainer>

        <PostCardContainer style={{ cursor: "pointer" }}>
          <PostCard img={featuredImage.imageURL} />
        </PostCardContainer>

        <PostTitle>{blogTitle}</PostTitle>
      </PostCardAncientRoot>
    </div>
  );
};

interface Props {
  blogPosts: BlogPostType[];
}

const Posts = ({ blogPosts = [] }: Props) => {
  const [visiblePostList, setVisiblePostList] = React.useState<
    Array<BlogPostType>
  >([]);
  const [postListState, setPostList] = React.useState<Array<BlogPostType>>([]);

  React.useEffect(() => {
    let localPostList = blogPosts;
    let firstThree = [];

    if (blogPosts.length > 3) {
      for (let i = 0; i < 3; i++) {
        const element = localPostList[i];

        firstThree.push(element);
      }

      setVisiblePostList(firstThree);

      for (let i = 0; i < 3; i++) {
        localPostList.shift();
      }

      setPostList(localPostList);
    } else {
      setVisiblePostList(localPostList);
    }
  }, []);

  const showMorePosts = () => {
    let current = [...postListState];
    let removeThree = current.splice(0, 3);

    setPostList(current);
    setVisiblePostList((prevState) => [...prevState, ...removeThree]);
  };

  console.log(visiblePostList);
  return (
    <div>
      {visiblePostList.length > 0 ? (
        <PostListRoot>
          {/* <PostListDetailOne src={"/images/detail-1.svg"} /> */}
          {/* <PostListDetailTwo src="/images/detail-3.svg" /> */}
          <PostListSectionTitle>
            <div>Últimas postagens</div>
          </PostListSectionTitle>
          <PostListContainer>
            {visiblePostList.map(
              (
                {
                  blogActive,
                  blogPost,
                  blogTitle,
                  featuredImage,
                  uuid: id,
                  slug,
                },
                index
              ) => {
                return (
                  <Fade key={index} in={true} timeout={{ enter: 750 }}>
                    <Link href={`/blog/${slug}`}>
                      <a>
                        <PostCardMain
                          readTime={Math.floor(
                            readingTime(blogPost).readTime
                          ).toString()}
                          blogActive={blogActive}
                          blogTitle={blogTitle}
                          featuredImage={featuredImage}
                        />
                      </a>
                    </Link>
                  </Fade>
                );
              }
            )}
          </PostListContainer>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            {postListState.length > 0 ? (
              <Fade in={true} timeout={{ exit: 750, enter: 500 }} unmountOnExit>
                <Tooltip title={"Mostrar mais posts"}>
                  <BlogShowMoreButtonContainer onClick={showMorePosts}>
                    <SvgIcon component={Add} />
                  </BlogShowMoreButtonContainer>
                </Tooltip>
              </Fade>
            ) : null}
          </div>
        </PostListRoot>
      ) : null}
    </div>
  );
};

export default Posts;
