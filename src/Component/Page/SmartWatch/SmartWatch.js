import React, {useEffect, useState } from 'react';
import style from './SmartWatch.module.css';
import classNames from 'classnames/bind';
// import  { useEffect, useState } from "react";
import axios from 'axios';
import { useCart } from 'react-use-cart';
import Cart from '../../Layout/cart/cart';
import { Link } from "react-router-dom";

import Sweetpagination from 'sweetpagination';

const cx = classNames.bind(style);
function Women() {
   const { addItem } = useCart();
  const [products,setProducts] = useState([])
  const [fillterCate ,setFillterCate] = useState('')
  const [fillterPrice ,setFillterPrice] = useState('')
  const [ listproducts, setlistproducts] = useState([])
  const [currentPageData , setcurrentPageData] = useState(products);
  // console.log(currentPageData)
  // console.log(products)
  // console.log(items)
  // function Fillter(e){
  //   if (e.target.value == '') {
  //       setfillter('')
  //   }
  //   else{
  //     setfillter(`price=${e.target.value}`)
  //     console.log(fillter)
  //   }
  // }
  
   useEffect(() => {
     axios
       .get('http://localhost:8000/products')
       .then(res => setProducts(res.data))
   }, [])
   function getFilter(e) {
      if (e.target.value=== "basic") {
        setFillterCate('type=basic')
      }
      if (e.target.value === "smart") {
        setFillterCate('type=smart');
      }
      if(e.target.value === "") {
        setFillterCate('');
      }
      if (e.target.value === "highest") {
        setFillterPrice("_sort=discount&_order=desc");
      }
      if (e.target.value === "lowest") {
        setFillterPrice("_sort=discount&_order=asc");
      }
      if (e.target.value === "1") {
        setFillterPrice('');
      }
   }
   useEffect(() =>{
    axios.get(`http://localhost:8000/products?${fillterCate}&${fillterPrice}`).then(res => setProducts(res.data))
   },[fillterCate, fillterPrice])
  return (
    // <div>Women</div>
    <>
      <div className={cx("container")}>
        <div className={cx("row","justify-content-between",'align-items-center')}>
          <div className={cx("form-group", "col-lg-3")}>
            {/* <label for="">Lọc sản phẩm</label> */}
            <select
              onChange={(e) => getFilter(e)}
              class="form-control"
              name=""
              id=""
            >
              <option value="">fillterCate</option>
              <option value="basic">basic</option>
              <option value="smart">smart</option>
              {/* <option value="29999"> 249.99</option> */}
            </select>
          </div>
          <div className={cx("col-lg-4")}>
            <h2 className="text-center pt-4">Product</h2>
          </div>
          <div className={cx("form-group", "col-lg-3")}>
            {/* <label for="">Lọc sản phẩm</label> */}
            <select
              onChange={(e) => getFilter(e)}
              class="form-control"
              name=""
              id=""
            >
              <option value="1">fillterPrice</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
              {/* <option value="29999"> 249.99</option> */}
            </select>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">
          {currentPageData.map((product) => {
            return (
              <>
                <div key={product.id}></div>
                <div className={cx("col-lg-3", "col-md-6", "col-sm-3", "p-3")}>
                  <div className="card">
                    <Link to={`/detail/${product.id}`}>
                      <img
                        className={cx("card-img-top", "img-item", "images")}
                        src={product.image}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {product.name}
                        </h5>
                        {/* <h5>{product.type}</h5> */}
                      </div>
                    </Link>

                    <div className="card-footer">
                      <span class="">
                        <del ng-if="item.cost > item.discount" class="px-1">
                          {product.price}$
                        </del>

                        <span className={cx("font-weight-bold", "color-red")}>
                          {product.discount}$
                        </span>
                      </span>
                    </div>
                    <button onClick={() => addItem(product)}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
                {/* <Cart /> */}
              </>
            );
          })}
        </div>
      </div>
      <Sweetpagination
        currentPageData={setcurrentPageData}
        getData={products}
        dataPerPage={8}
        navigation={true}
        getStyle={"style-1"}
      />
    </>
  );
}

export default Women
