import React from "react";
import { Img } from "./logo-styles";
import logo from '../../assets/icon-readme.png';

const Logo: React.FC = () => {
  return <Img src={logo} alt="logo" />;
};

export default Logo;
