import React, { useEffect, useRef, useState } from 'react';
import style from './Header.module.css';
import classNames from 'classnames/bind';
import logo from '../../../img/logo.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiTwotonePhone } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { ImSearch } from 'react-icons/im';
import { BsPeopleFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
// import Boxcart from './boxCart';
import Cart from '../cart/cart';
import axios from 'axios';


const cx = classNames.bind(style);



function Header() {
  const {totalUniqueItems} = useCart();
  const [product,setProducts] = useState([])
  const [openBox,setOpenBox] = useState(false)
  const [searchProduct,setSearchProduct] = useState([])
  // const [showcart, setshowcart] = useState(false);
   
    // const iconCart = useRef()
    //  const { totalUniqueItems } = useCart();
    //  useEffect(() => {
    // const outSide = (e) => {
    //   if (e.path[0] != iconCart.current) {
    //     setshowcart(false);
    //   }
    // }
    useEffect (() =>{
      axios.get('http://localhost:8000/products')
       .then(res => setProducts(res.data))
    },[])
    function getProduct(e) {
      let valueName = e.target.value
      setSearchProduct (() =>{
        if (valueName == '') {
          return [];
        }
        else {
          return product.filter(product => product.name.toLowerCase().includes(valueName.toLowerCase()))
        }
      })
    }
  //   document.body.addEventListener('click', outSide);
  //   return () => document.body.removeEventListener('click', outSide);
  // }, [])
    return (
      <>
        <div className={cx("hihi")}>
          <div className={cx("container")}>
            <div className={cx("row")}>
              <div className={cx("d-flex", "col-lg-9", "info-header")}>
                <p>
                  {" "}
                  <FaMapMarkerAlt /> Ngõ 59, đường Phạm Văn Đồng, Mai Dịch, Cầu
                  Giấy, Hà Nội
                </p>
                <p>
                  {" "}
                  <AiTwotonePhone /> 0986797018{" "}
                </p>
              </div>
              <div className={cx("col-lg-2")}></div>
              <div className={cx("d-flex", "col-lg-1")}>
                <p className={cx("color")}>
                  {" "}
                  <FaFacebookSquare />{" "}
                </p>
                <p className={cx("color")}>
                  {" "}
                  <AiFillInstagram />{" "}
                </p>
                <p className={cx("color")}>
                  {" "}
                  <AiFillTwitterSquare />{" "}
                </p>
              </div>
            </div>
          </div>
          <div className={cx("lines")}></div>
          <div className={cx("container")}>
            <div className={cx("row")}>
              <div className={cx("col-lg-3")}>
                <Link to="/">
                  <img src={logo} className={cx("w-100")} />
                </Link>
              </div>
              <div className={cx("col-lg-1")}></div>
              <div className={cx("col-lg-5", "mt-4")}>
                <div className={cx("input-group", "mb-3", "search")}>
                  <input
                    onFocus={() => setOpenBox(true)}
                    onBlur={() => setOpenBox(false)}
                    type="text"
                    className={cx("form-control", "linh")}
                    placeholder="Tìm kiếm..."
                    onChange={(e) => getProduct(e)}
                  />
                  {openBox === true ? (
                    searchProduct.length > 0 ? (
                      <div className={cx("box-search", "overflow-hidden")}>
                        {searchProduct.map((item) => (
                          <div
                            className={cx(
                              "d-flex",
                              "align-items-center",
                              "pb-1",
                              "border-bottom"
                            )}
                          >
                            <img
                              src={item.image}
                              style={{ width: "50px",height: "50px",borderRadius: "50%",}}></img>
                            <span className="">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    ) : ("")) : ("")}

                  <div className={cx("input-group-append")}>
                    <button
                      className={cx("btn", "btn-outline-secondary", "linh")}
                      type="button"
                      id="button-addon2"
                    >
                      <ImSearch />
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("col-lg-1")}></div>
              <div className={cx("icon-header", "mt-4", "col-lg-2", "d-flex")}>
                <div className={cx("col-lg-1")}>
                  <p className={cx("color")}>
                    {" "}
                    <Link to="/login">
                      {" "}
                      <BsPeopleFill />{" "}
                    </Link>
                  </p>
                </div>
                <div className={cx("col-lg-1","d-flex")}>
                  <Link
                    to="/cart"href="#"
                  >
                    <FaShoppingCart />
                  </Link>
                  <p className={cx("color","mr-",'totaluniqueItem')}>{totalUniqueItems}</p>

                  {/* <p className={cx("cart-total")}>{totalUniqueItems}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("lines")}></div>

        <div className={cx("hihi")}>
          <div className={cx("menu", "container")}>
            <div className={cx("row", "pl-5")}>
              <div
                className={cx("text-menu", "text-menu-seccond", "text-white")}
              >
                <Link to="/" className={cx("text-white", "pl-5")}>
                  TRANG CHỦ
                </Link>
              </div>
              <div
                className={cx("text-menu", "text-menu-seccond", "text-white")}
              >
                <Link to="/Introduce" className={cx("text-white")}>
                  GIỚI THIỆU
                </Link>
              </div>
              <div className={cx("text-menu", "text-menu-seccond")}>
                <Link to="/product" className={cx("text-white")}>
                  SẢN PHẨM
                </Link>
              </div>
              {/* <div className={cx("text-menu", "text-menu-seccond")}>
                <Link to="/women" className={cx("text-white")}>
                  ĐỒNG HỒ THÔNG MINH
                </Link>
              </div> */}
              <div className={cx("text-menu", "text-menu-seccond")}>
                <Link to="/blogs" className={cx("text-white")}>
                  BLOGS
                </Link>
              </div>
              <div className={cx("text-menu", "text-menu-seccond")}>
                <Link to="/contact" className={cx("text-white")}>
                  LIÊN HỆ
                </Link>
              </div>
            </div>
          </div>
          {/* {showcart && <Boxcart />} */}
        </div>
      </>
    );
}

export default Header