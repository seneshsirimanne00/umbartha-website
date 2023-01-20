import { Row } from "antd";
import styled from "styled-components";
import { ParaJosefin } from "../../pages/CommonStyles";

export const ServicesBoxContainer = styled.div`
  padding: 0vh 10vw;
  margin-bottom:30px;
  text-align:justify;

 
`;

export const ServicesBoxContainerPara = styled(ParaJosefin)`
  padding: 10px;
  
`;



export const ServicesBoxImg = styled.img`
  width:100%;
`;

export const ServicesBoxImgIcon = styled.img`
  width:5vw;
  background-color: #123051;
`;

export const ServicesRow = styled(Row)<{$left:boolean}>`
  flex-direction: ${(props) => props.$left ? "row":"row-reverse" };

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;