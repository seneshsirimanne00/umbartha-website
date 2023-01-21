import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import { ClientReviewsTemp } from "../constants";
import {
  ReviewContainer,
  ReviewHeader,
  ReviewPara,
} from "./PageStyles/ClientReviewsStyles";

export interface IClientReviewsProps {}

const ClientReviews: React.FC<IClientReviewsProps> = () => {
  return (
    <>
      <Header home={false} linkNumber={4} />
      <Banner
        mainHeader={"Client Reviews"}
        breadcrumb={"Reviews"}
        imagePath={"/bannerimg1.png"}
      />

      <ReviewContainer>
        {ClientReviewsTemp.map((review) => (
          <div key={review.Title}>
            <br />
            <ReviewHeader>{review.Title}</ReviewHeader>
            <ReviewPara>{review.para}</ReviewPara>
            <br />
            <hr />
          </div>
        ))}
      </ReviewContainer>
    </>
  );
};

export default ClientReviews;
