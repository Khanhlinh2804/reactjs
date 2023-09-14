import React, { useEffect, useState,useRef } from "react";
import style from "./Detail.module.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import axios from "axios";
import { useParams } from "react-router-dom";

const cx = classNames.bind(style);

function Detail() {
  const { id } = useParams();
  const [product, setProducts] = useState({});
  const [amount, setAmount] = useState(1);
  const quantity = useRef();
  const [selectSize, setSelectSize] = useState("");
  const {addItem} = useCart()

  

  const addCart = (product, quantities) => {
    if (!selectSize) {
      alert("");
    } else {
      let listProductCart = JSON.parse(
        localStorage.getItem("productCart") || "[]"
      );
      let productCart = { 
        ...product,
        quantities,
      };
      listProductCart.push(productCart);
      localStorage.setItem("productCart", JSON.stringify(listProductCart));
      console.log(quantity);
      quantity.current.value = 1;
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={product.image} className={cx("w-100")}></img>
          </div>
          <div className={cx("col-lg-6", "mt-5")}>
            <div className="">
              <h3>{product.name}</h3>
              <span>SKU: candytee4</span>
              <p className={cx("line")}></p>
              <h3 style={{ textDecoration: "line-through" }}>
                {product.discount}$
              </h3>
              <h3>{product.price}$</h3>
              
              <div class="d d-flex">
                <div
                  className={cx("btn-group")}
                  role="group"
                  aria-label="Basic example">
                  <button class="btn"
                    onClick={() => {
                      amount <= 1 ? setAmount(1) : setAmount(amount - 1);
                    }}
                    id="sub"> -
                  </button>
                  <input value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    ref={quantity} type="text"
                    defaultValue={amount} className={cx("num")} id="qty"
                  />
                  <button class="btn" onClick={() => {
                      setAmount(amount + 1);
                    }}id="add">
                      +</button>
                </div>
                <div className={cx("buy")}>
                  <button onClick={()=>addItem(product)}>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
              <div className={cx("d-bot, pt-5")}>
                <ul className={cx("d-flex", "p-0", "m-0")} >
                  
                    <a href="">DESCRIBE</a>
                  
                  
                    <a href="">Return Policy</a>
                  
                  
                    <a href="">SHOPPING GUIDE</a>
                  
                </ul>
                <p className={cx("line")}></p>
                <span>
                  _ Material: 2-way cotton fabric _ Pink _ Pattern: Silk
                  printing _ Form of shirt: Oversize The T-shirt is made of 100%
                  cotton with 2-way stretch, providing the wearer with the
                  coolest and most comfortable wear. TSUN is constantly
                  improving and enhancing its products day by day. The t-shirt
                  you see on the website has undergone 4 improvements: +
                  Improved seam at the shoulder to keep the form + Adjust the
                  shirt size to be more and more suitable + Upgraded print
                  material and collar fabric
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  // return (
  //   <>
  //     <div>
        
  //       <div className={cx("pt-5", "mt-5")}>
  //         <div className={cx("pt-5")}></div>
  //       </div>
  //       <div className={cx("container-fluid", "hihi")}>
  //         <div className="row  ml-5">
  //           <div className={cx("col-lg-6", "pt-5")}>
  //             <h6 className={cx("text-white")}>
  //               <spam className={cx("text-black")}> _</spam> ABOUT US
  //             </h6>
  //             <p className={cx("text-afew")}>A few words about our shop</p>
  //             <p className={cx("text-sed")}>
  //               Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
  //               nibh magna. Proin risus erat, fringilla vel purus sit.
  //             </p>
  //             <p></p>
  //           </div>
  //           <div className={cx("col-lg-6")}>
  //             <img
  //               src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-about-pic3.png"
  //               className={cx("w-100", "img-about1", "pr-5")}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //       <div className={cx("pt-5", "mt-5")}>
  //         <div className={cx("pt-5")}></div>
  //       </div>
  //       <div className={cx("container")}>
  //         <div className={cx("row")}>
  //           <div className={cx("col-lg-6")}>
  //             <img
  //               src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-about-pic1.jpg"
  //               className={cx("w-100")}
  //             />
  //           </div>
  //           <div className={cx("col-lg-6")}>
  //             <p className={cx("text-black", "font-size")}>
  //               Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis
  //               nibh magna. Proin risus erat, fringilla vel purus sit amet,
  //               mattis porta enim.
  //             </p>
  //             <p className={cx("text-8B97AA", "font-size")}>
  //               Mauris mollis lobortis turpis, eget accumsan ante aliquam quis.
  //               Nam ullamcorper rhoncus sem vitae tempus. Curabitur ut tortor a
  //               orci fermentum ultricies.
  //             </p>
  //             <p className={cx("text-8B97AA", "font-size")}>
  //               Integer magna purus, commodo in diam nec, pretium auctor sapien.
  //               In pulvinar, ipsum eu dignissim facilisis, massa justo varius
  //               purus, non dictum elit nibh ut massa. Pellentesque velit dolor,
  //               suscipit in ligula a, suscipit rhoncus dui.
  //             </p>
  //           </div>
  //         </div>
  //         <div className={cx("pt-5", "mt-5")}>
  //           <div className={cx("pt-5")}></div>
  //         </div>
  //         <div className="row">
  //           <div className="col-lg-6">
  //             <p className={cx("text-black", "font-size")}>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
  //               mauris dolor, gravida a varius blandit, auctor eget purus.
  //               Phasellus scelerisque sapien sit amet mauris laoreet, eget
  //               scelerisque nunc cursus.
  //             </p>
  //             <p className={cx("text-8B97AA", "font-size")}>
  //               Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta
  //               dui eget mollis. Nullam lacinia dictum auctor. Class aptent
  //               taciti sociosqu ad litora torquent per conubia nostra, per
  //               inceptos himenaeos. Orci varius.
  //             </p>
  //             <p className={cx("text-8B97AA", "font-size")}>
  //               Mauris accumsan, massa non consectetur condimentum, diam arcu
  //               tristique nibh, nec egestas diam elit at nulla. Suspendisse
  //               potenti.
  //             </p>
  //           </div>
  //           <div className="col-lg-6">
  //             <img
  //               src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-about-pic2.jpg"
  //               className={cx("w-100")}
  //             />
  //           </div>
  //         </div>
  //         <div className={cx("pt-5", "mt-5")}>
  //           <div className={cx("pt-5")}></div>
  //         </div>
          
  //       </div>
  //       <div className={cx("row")}>
  //         <div className={cx("col-lg-3", "te")}>
  //           <h1 className={cx("font-size24")}>24</h1>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}
export default Detail
