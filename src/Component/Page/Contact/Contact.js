import React from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.css";
import { GrMap } from "react-icons/gr";

let cx = classNames.bind(styles);

function Register() {
  return (
    <>
      <div className={cx("container", "p-5")}>
        <iframe
          className={cx("map")}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1052.5087589120694!2d105.77906320565675!3d21.043448877208007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454cb5ce20473%3A0xeb27aa7f0ea47831!2zTmcuIDU5IMSQLiBQaOG6oW0gVsSDbiDEkOG7k25nLCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1659945450146!5m2!1svi!2s"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className={cx("row", "mt-5")}>
          <div className={cx("col-lg-4", "d-flex")}>
            <div className={cx("icon")}>
              <GrMap />
            </div>
            <div>
              <p className={cx("text", "pl-2")}>
                <p className={cx("title", 'h4')}>Địa chỉ:</p> Ngõ 59, đường Phạm Văn
                Đồng, Mai Dịch, Cầu Giấy, Hà Nội
              </p>
            </div>
          </div>
          <div className={cx("col-lg-4", "d-flex")}>
            <div className={cx("icon")}>
              <GrMap />
            </div>
            <div>
              <p className={cx("text", "pl-2")}>
                <p className={cx("title", 'h4')}>Điện thoại:</p> 0986797018
                <br /> Bấm 109 – Phòng kinh doanh <br />
                Bấm 103 – Phòng kỹ thuật
              </p>
            </div>
          </div>
          <div className={cx("col-lg-4", "d-flex")}>
            <div className={cx("icon")}>
              <GrMap />
            </div>
            <div>
              <p className={cx("text", "pl-2")}>
                <p className={cx("title", 'h4')}>Email:</p> Khanhlinh6863@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
