import axios, { AxiosResponse } from "axios";
import React from "react";
import { ServiceCollection } from "../../@types";

interface Props {}

const ServicePage = (props: Props) => {
  console.log(props);

  return <div>this is the service page</div>;
};

export const getStaticPaths = async () => {
  const serviceRequest: AxiosResponse<ServiceCollection[]> = await axios.get(
    "https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/services"
  );

  const serviceRequestData = serviceRequest.data;

  const paths = serviceRequestData.map((value, index) => {
    return {
      params: { slug: value.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const serviceByIdRequest: AxiosResponse<ServiceCollection> = await axios.post(
    `https://us-central1-especializa-next-hefesto.cloudfunctions.net/api/collections/entries/services/where`,
    {
      key: "slug",
      value: params.slug,
    }
  );

  const serviceByIdRequestData = serviceByIdRequest.data;

  console.log(params);

  return { props: serviceByIdRequestData };
};

export default ServicePage;
