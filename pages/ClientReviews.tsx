import React from "react";
import Header from "../components/Header";

export interface IClientReviewsProps {}

const ClientReviews: React.FC<IClientReviewsProps> = () => {
  return (
    <>
      <Header home={false} />
      <h1>ClientReviews</h1>
    </>
  );
};

export default ClientReviews;
