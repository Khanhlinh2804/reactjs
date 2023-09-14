import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Product.module.css";
import classNames from "classnames/bind";
import Women from "../SmartWatch/SmartWatch";
// import Men from "../vintageWatch/vintageWatch";
import axios from "axios";
const cx = classNames.bind(style);
function Product() {
  return (
    <>
      <div>
        <Women />
      </div>
      
    </>
    
  );
  
}

export default Product;
