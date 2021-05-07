import axios, { AxiosResponse } from "axios";
import React from "react";
import { CourseCollection } from "../../@types";
import convertToSlug from "../../helper/convertToSlug";

interface Props {}

const PlacePage = (props: Props) => {
  return <div>this is a placeholder page</div>;
};

export const getStaticPaths = async () => {
  const courseRequest: AxiosResponse<CourseCollection[]> = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/coursesNew"
  );

  const courseRequestData = courseRequest.data;

  const paths = courseRequestData.map(
    (course: CourseCollection, index: number) => {
      return {
        params: {
          slug: [
            convertToSlug(course.courseLevel),
            convertToSlug(course.courseArea),
            course.slug,
            course.uuid,
          ],
        },
      };
    }
  );

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // console.log(params);

  const courseRequestByID: AxiosResponse<CourseCollection> = await axios.get(
    `https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entrie/coursesNew/${params.slug[3]}`
  );

  const courseRequestByIDData = courseRequestByID.data;

  return { props: courseRequestByIDData };
};

export default PlacePage;
