import React from 'react'
import classNames from 'classnames/bind';
import styles from './Footer.module.css';
import { BsPinMap } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { FaMailBulk } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillRssFill } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import chplay from '../../../img/chplay.png';
import ios from '../../../img/ios.png';
import footer from '../../../img/footer.png';
import visa from '../../../img/visa.png';

let cx = classNames.bind(styles);
function Footer() {
  return (<>
    <div className={cx('bg-footer')} >
      
      <div className={cx('container')}>
        
        
        <div className={cx('row')}>
          
          <div className={cx('col-lg-3','mt-5')} >
            <h4>THÔNG TIN LIÊN HỆ</h4>
            <div className={cx('d-flex')}>
              <p> <BsPinMap className={cx('icon-footer')} /> </p>
              <p> 319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
            </div>
            <div className={cx('d-flex')} >
              <p> <GiRotaryPhone /> </p>
              <p> 0986797018</p>
            </div>
            <div className={cx('d-flex')} >
              <p> <FaMailBulk /> </p>
              <p> Khanhlinh6863@gmail.com</p>
            </div>
            <div className={cx('d-flex')}>
              <p className={cx('p-1')}> <AiFillFacebook /> </p>
              <p className={cx('p-1')}> <RiInstagramFill /> </p>
              <p className={cx('p-1')}> <AiFillTwitterSquare /> </p>
              <p className={cx('p-1')}> <BsFillRssFill /> </p>
              <p className={cx('p-1')}> <AiFillLinkedin /> </p>
            </div>


          </div>
          <div className={cx('col-lg-3','mt-5')} >
            <h4> LIÊN KẾT </h4>
            <p> Giới Thiệu</p>
            <p> Đồng hồ nam</p>
            <p> Đồng hồ nữ</p>
            <p> Blogs</p>
            <p> Liên hệ</p>

          </div>
          <div className={cx('col-lg-3','mt-5')}>
            <h4>HỖ TRỢ</h4>
            <p>Hướng dẫn mua hàng</p>
            <p>Hướng dẫn thanh toán</p>
            <p>Chính sách bảo hành</p>
            <p>Chính sách đổi trả</p>
            <p>Tư vấn khách hàng</p>

          </div>
          <div className={cx('col-lg-3','mt-5')} >
            <h4>TẢI ỨNG DỤNG TRÊN</h4>
            <p>Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay.</p>
            <img src={chplay} width="166px" height="44px" />
            <p></p>
            <img src={ios} width="166px" height="44px" />
          </div>
          <p className={cx('m-4')}></p>
        </div>
      </div>
      <div className={cx('line')}></div>

      <div className={cx('container')}>
        <div className={cx('row', 'align-items-center')}>
          <div className={cx('col-lg-8')}>
            <div className={cx('d-flex', 'align-items-center', 'p-4')}>
              <p className={cx('mb-0')}>© Bản quyền thuộc về</p>
              <p className={cx('mb-0')}>.Thiết kế website</p>
              <img src={footer} width="20px" height="20px" />
              <p className={cx('mb-0')}>Mona Media</p>
            </div>
          </div>
          <div className={cx('col-lg-4')}>
            <img src={visa} width="305px" height="35px" />
          </div>

        </div>

      </div>


    </div>
  </>
  );
}

export default Footer;