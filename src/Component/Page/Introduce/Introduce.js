import React from 'react';
import classNames from 'classnames/bind';
import introduce01 from '../../../img/sp.png';
import style from './Introduce.module.css';
import anh1 from '../../../img/introduce02.png';
import anh2 from '../../../img/introduce03.png';
import anh3 from '../../../img/introduce04.png';
import anh4 from '../../../img/introduce05.png';
import anh5 from '../../../img/introduce06.png';
import anh6 from '../../../img/introduce07.png';
import anh7 from '../../../img/introduce14.png';
import anh8 from '../../../img/introduce15.png';


const cx = classNames.bind(style);

function Introduce() {
  return (<>

    <div className={cx('container')}>
      <div className={cx('row')}>
        <div className={cx('col-lg-6')}>
          <img src={introduce01} className={cx('w-100', 'mt-3', 'mb-3')} />

        </div>
        <div className={cx('col-lg-6')}>
          <div>
            <h3 className={cx('mt-5', 'pt-3')}>Giới thiệu về Watch Mona</h3>
            <p className={cx('text-black','mt-3')}>“Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay. Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”</p>
          
          </div>
        </div>

      </div>
    </div>
    <div className={cx('container','mt-5')}>
      <div className={cx('row','mt-4')}>
        <div className={cx('col-lg-1')}>
          <img src={anh1} className={cx('w-100','anh')} />
        </div>
        <div className={cx('col-lg-3')}>
          <h4 className={cx('text-black')}>Hàng chính hãng</h4>
          <p className={cx('text-black', 'text-size')} >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>

        </div>
        <div className={cx('col-lg-1')}>
          <img src={anh2} className={cx('w-100','anh')} />
        </div>
        <div className={cx('col-lg-3')}>
          <h4 className={cx('text-black')}>Hàng chính hãng</h4>
          <p className={cx('text-black','text-size')} >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>

        </div>
        <div className={cx('col-lg-1')}>
          <img src={anh3} className={cx('w-100','anh')} />
        </div>
        <div className={cx('col-lg-3')}>
          <h4 className={cx('text-black')}>Hàng chính hãng</h4>
          <p className={cx('text-black', 'text-size')} >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>

        </div>
      </div>
      <div className={cx('row','mt-4')}>
        <div className={cx('col-lg-1')}>
          <img src={anh4} className={cx('w-100', 'anh')} />
        </div>
        <div className={cx('col-lg-3')}>
          <h4 className={cx('text-black')}>Hàng chính hãng</h4>
          <p className={cx('text-black','text-size')} >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>

        </div>
        <div className={cx('col-lg-1')}>
          <img src={anh5} className={cx('w-100', 'anh')} />
        </div>
        <div className={cx('col-lg-3')}>
          <h4 className={cx('text-black')}>Hàng chính hãng</h4>
          <p className={cx('text-black', 'text-size')} >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>

        </div>
        <div className={cx('col-lg-1')}>
          <img src={anh6} className={cx('w-100', 'anh')} />
        </div>
        <div className={cx('col-lg-3')}>
          <h4 className={cx('text-black')}>Hàng chính hãng</h4>
          <p className={cx('text-black', 'text-size')} >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>

        </div>
      </div>
    </div>
    <div className={cx('relative')}>
      <img src={anh7} className={cx('w-100', 'anh7','relative')} />
      <div className={cx('container', 'absolute')}>
        <div className={cx('row')}>
          <div className={cx('col-lg-3', 'text-center')}>
            <h1 className='text-white'>78.348</h1>
            <p className={cx('text-white', 'size', 'bold')}>Sản phẩm</p>
          </div>
          <div className={cx('col-lg-3', 'text-center')}>
            <h1 className={cx('text-white')}>348</h1>
            <p className={cx('text-white', 'size', 'bold')}>Giải thưởng</p>
          </div>
          <div className={cx('col-lg-3','text-center')}>
            <h1 className={cx('text-white')}>978.338</h1>
            <p className={cx('text-white', 'size','bold')}>Khách hàng hài lòng</p>
          </div>
          <div className={cx('col-lg-3', 'text-center')}>
            <h1 className={cx('text-white')}>148</h1>
            <p className={cx('text-white', 'size', 'bold')}>Cửa hàng</p>
          </div>
        </div>

      </div>
    </div>
    <div className={cx('container')}>
      <div className={cx('row')}>
        <div className={cx('col-lg-4','text-center', 'mt-5')}>
          <img src={anh8} />
          <p className={cx('text-black','nghieng')}>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
          <h6 className={cx('nghieng')}>THÚY KIỀU</h6>
        </div>
        <div className={cx('col-lg-4', 'text-center', 'mt-5')}>
          <img src={anh8} />
          <p className={cx('text-black', 'nghieng')}>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
          <h6 className={cx('nghieng')}>THÚY KIỀU</h6>
        </div>
        <div className={cx('col-lg-4', 'text-center', 'mt-5')}>
          <img src={anh8} />
          <p className={cx('text-black', 'nghieng')}>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
          <h6 className={cx('nghieng')}>THÚY KIỀU</h6>
        </div>
        
      </div>
    </div>
    

  </>
  )
}

export default Introduce