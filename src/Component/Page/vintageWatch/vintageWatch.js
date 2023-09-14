import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./vintageWatch.module.css";
import classNames from "classnames/bind";
// import  { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import Cart from "../../Layout/cart/cart";

const cx = classNames.bind(style);
function Men() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setProducts(res.data));
  }, []);
  const { addItem } = useCart();

  return (
    <>
      <h2 className="text-center pt-4"> VintageWatch</h2>
      <div className="container p-4">
        <div className="row">
          {products.map((product) => {
            return (
              <>
                <div className={cx("col-lg-3", "col-md-6", "col-sm-3", "p-3")}>
                  <Link to={`/detail/${product.id}`}>
                    <div className="card">
                      <img
                        className={cx("card-img-top", "img-product")}
                        src={product.image}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">{product.name}</h5>
                      </div>
                      <div className="card-footer">
                        <span class="">
                          <del ng-if="item.cost > item.discount" class="px-1">
                            {product.prices}
                          </del>
                          <span class="font-weight-bold">{product.discount}</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Men;
