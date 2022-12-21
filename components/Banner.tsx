import React from "react";
import {
  BannerBreadcrumb,
  BannerContainer,
  BannerHeader,
  BannerLink,
} from "./styled";
import { Lato } from "@next/font/google";

const lato = Lato({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export interface IBannerProps {
  mainHeader: string;
  breadcrumb: string;
}

const Banner: React.FC<IBannerProps> = ({ mainHeader, breadcrumb }) => {
  return (
    <BannerContainer $imagePath="/bannerimg1.png">
      <BannerHeader className={lato.className}>{mainHeader}</BannerHeader>
      <BannerBreadcrumb>
        <BannerLink href="/">Home</BannerLink> | {breadcrumb}
      </BannerBreadcrumb>
    </BannerContainer>
  );
};

export default Banner;
