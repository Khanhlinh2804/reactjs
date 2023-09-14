import React, { useEffect, useState,useRef } from "react";
import styles from "./cart.module.css";
import classNames from "classnames/bind";
// import  { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
let cx = classNames.bind(styles)
function Cart() {
     const [cart, setcart] = useState([]);
      useEffect(() => {
        axios
          .get("http://localhost:8000/products")
          .then((res) => setcart(res.data));}, []);
          const {cartTotal,isEmpty,items,updateItemQuantity,removeItem,} = useCart();

         if (isEmpty) return <p className={cx('text-black', "no-cart","pl-6")}> Không có sản phẩm nào trong giỏ hàng </p>;
        return (
          <>
            <div className={cx("container")}>
              <div className={cx("row")}>
                <table className={cx("table", "col-lg-8")}>
                  <thead>
                    <tr>
                      <th scope="col">Sản phẩm</th>
                      <th scope="col">Tên</th>
                      <th scope="col">Giá</th>
                      <th scope="col" className={cx('pr-0','pl-0')}>Số lượng</th>
                      <th scope="col" >Số lượng</th>
                    </tr>
                  </thead>
                </table>
                <p>hi</p>
                <table className={cx("table", "col-lg-3")}>
                  <thead>
                    <tr>
                      <th scope="col">Tổng</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className={cx("row")}>
                <ul className={cx("col-lg-8")}>
                  {items.map((item) => (
                    <div key={item.id} className={cx("d-flex","col-lg-8","pl-0","pr-0","border-bottom")}>
                      <div className={cx("img-cart","mt-3","col-lg-3","w-100",'pl-0',)}>
                        <img src={item.image} className={cx("images")} />
                      </div>
                      <div
                        className={cx("name-cart","pt-5","mr-2","text-size","pl-4","ml-5","col-lg-5","mb-1",'pl-5')}
                      >
                        {item.name}
                      </div>
                      <div className={cx("col-lg-4", "pt-5", "text-size",'pl-0' )}>
                        <h7 className={cx("")}>{item.price} $</h7>
                      </div>

                      <div className={cx("plus", "top")}>
                        <button
                          className={cx("btn", "mt-5", "text", "cart_btn__R2pJo")}
                          onClick={() =>updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      </div>

                      <div
                        className={cx("name-qtty","mt-4","padding-top","text-size")}>
                        {item.quantity}
                      </div>
                      <div className={cx("plus", "top")}>
                        <button
                          className={cx("btn", "mt-5", "text", "cart_btn__R2pJo")}
                          onClick={() =>updateItemQuantity(item.id, item.quantity + 1)
                          }>+</button>
                      </div>

                      <div className={cx("plus", "pl-3", "top")}>
                        <button
                          className={cx("btn-remove","bg-danger","mt-5","border-radius","m-3", "delete")}
                          onClick={() => removeItem(item.id)}>
                          &times;
                        </button>
                      </div>
                    </div>
                  ))}
                </ul>
                
                <div className={cx("col-lg-3", "p-0", "pt-3",'ml-3')}>
                  <div
                    className={cx("d-flex","justify-content-between","border-bottomm")}>
                    <h7 className={cx("l-0")}>Tiền sản phẩm: </h7>
                    <h7 className={cx("cartTotal")}> {cartTotal}$</h7>
                  </div>
                  <div
                    className={cx("d-flex","justify-content-between","border-bottomm","mt-4")}>
                    <h7 className={cx("l-0")}>Phí vận chuyển </h7>
                    <h7 className={cx("")}> 0</h7>
                  </div>
                  <div
                    className={cx("d-flex","justify-content-between","border-bottomm","mt-4")}>
                    <h7 className={cx("l-0")}>Tổng </h7>
                    <h7 className={cx("cartTotal")}> {cartTotal}$</h7>
                  </div>
                  <div>
                    <button className={cx("w-100", "pay")}> Thanh toán</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
   
}


export default Cart;
