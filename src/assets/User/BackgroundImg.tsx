import React from "react";
import styled from "styled-components";
import Background from "../../assets/User/Background.png"

export default function BackgroundImgFile() {
  return (
    <>
      <BackgroundImg src={Background} alt="" />
    </>
  )
}

const BackgroundImg = styled.img`
  width: 60vw;
`