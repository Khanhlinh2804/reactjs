import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import classNames from "classnames/bind";
import home02 from "../../../img/home02.png";
import home01 from "../../../img/home03.png";
import home03 from "../../../img/home05.png";
import home04 from "../../../img/home002.jpg";
import home003 from "../../../img/home003.jpg";
import axios from "axios";

const cx = classNames.bind(style);

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={home01}
              className={cx("d-block", "w-100", "img")}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={home02}
              className={cx("d-block", "w-100", "img")}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={home03}
              className={cx("d-block", "w-100", "img")}
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className={cx("container", "pt-3")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-6", "banner-img")}>
            <img src={home003} className={cx("w-100", "baner")} />
            <h2 className={cx("home-text", "text-white")}>THỜI THƯỢNG VÀ </h2>
            <h2 className={cx("home-textS", "text-white")}>CỔ ĐIỂN </h2>
          </div>
          <div className={cx("col-lg-6", "banner-img")}>
            <img src={home04} className={cx("w-100", "baner")} />
            <div className={cx("")}></div>
            <h2 className={cx("home-text", "text-white", "bg-black")}>
              CÔNG NGHỆ VÀ{" "}
            </h2>
            <h2 className={cx("home-textS", "text-white", "bg-black", "p-3")}>
              THỜI ĐẠI{" "}
            </h2>
          </div>
        </div>
      </div>
      <h2 className="text-center pt-4"> SẢN PHẨM MỚI</h2>
      <div className="container p-4">
        <div className="row">
          {products.map((product) => {
            return (
              <>
                <div className={cx("col-lg-3", "col-md-6", "col-sm-3", "p-3")}>
                  <div className="card">
                    <Link to={`/detail/${product.id}`}>
                      <img
                        className={cx("card-img-top", "img-product")}
                        src={product.image}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {product.name}
                        </h5>
                      </div>
                    </Link>

                    <div className="card-footer">
                      <span className="">
                        <del ng-if="item.cost > item.discount" class="px-1">
                          {product.price}$
                        </del>
                        <span className={cx("font-weight-bold", "color-red")}>
                          {product.discount}$
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <h2 className="text-center pt-4"> SALE</h2>
      <div className="container p-4">
        <div className="row">
          {products.map((product) => {
            return (
              <>
                <div className={cx("col-lg-3", "col-md-6", "col-sm-3", "p-3")}>
                  <div className="card">
                    <Link to={`/detail/${product.id}`}>
                      <img
                        className={cx("card-img-top", "img-product")}
                        src={product.image}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {product.name}
                        </h5>
                      </div>
                    </Link>

                    <div className="card-footer">
                      <span className="">
                        <del ng-if="item.cost > item.discount" class="px-1">
                          {product.price}$
                        </del>
                        <span className={cx("font-weight-bold", "color-red")}>
                          {product.discount}$
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
