import React from "react";
import { Lato } from "@next/font/google";

import {
  BannerBreadcrumb,
  BannerContainer,
  BannerHeader,
  BannerLink,
} from "./styled";

const lato = Lato({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export interface IBannerProps {
  mainHeader: string;
  breadcrumb: string;
  imagePath: string;
}

const Banner: React.FC<IBannerProps> = ({
  mainHeader,
  breadcrumb,
  imagePath,
}) => {
  return (
    <BannerContainer $imagePath={imagePath}>
      <BannerHeader className={lato.className}>{mainHeader}</BannerHeader>
      <BannerBreadcrumb>
        <BannerLink href="/">Home</BannerLink> | {breadcrumb}
      </BannerBreadcrumb>
    </BannerContainer>
  );
};

export default Banner;
