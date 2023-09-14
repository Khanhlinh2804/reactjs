import React from 'react';
import style from './blogs.module.css';
import classNames from 'classnames/bind';
import { ImSearch } from 'react-icons/im';
import blog01 from '../../../img/blog1.png';
import blog02 from '../../../img/blog2.jpg';
import blog03 from '../../../img/blog1.jpg';
import blog04 from '../../../img/blog4.jpg';
import blog05 from '../../../img/blog5.jpg';
import blog06 from '../../../img/blog001.jpg';
import blog07 from '../../../img/blog02.jpg';
import blog08 from '../../../img/blog03.jpg';
import blog09 from '../../../img/blog04.jpg';
import blog10 from '../../../img/blog05.jpg';

const cx = classNames.bind(style);


function Blogs() {
  return (
    <>
      <div className={cx('container')}>
        <div>
          <h2 className={cx('text-center', 'p-3')}>blogs</h2>
        </div>
        <div className={cx('row','justify-content-between')}>
          <div className={cx('col-lg-3', 'pl-0', 'pr-0')}>
            <div className={cx('input-group', 'mb-3', 'w-100')}>
              <div className={cx('d-flex')}>
                <input type="text" className={cx('form-control', 'linh')} placeholder="Tìm kiếm..." aria-label="Tìm kiếm" aria-describedby="button-addon2" />
                <div className={cx('input-group-append')}>
                  <button className={cx('btn', 'btn-outline-secondary')} type="button" id="button-addon2"> <ImSearch /> </button>
                </div>
              </div>


            </div>
            <h2>Bài viết mới</h2>
            <div className={cx()}>
              <div className={cx('row', 'justify-content-around', 'align-items-center', 'boder', 'boders')}>
                <div className={cx('col-lg-3', 'pr-0')}><img src={blog01} className={cx('img', 'pt-2', 'pb-2')}></img></div>
                <div className={cx('col-lg-8', 'pl-0')}><p className={cx('text-black', 'font-text', 'mb-0')}>
                  Chiếc đồng hồ của những CEO quyền lực nhất thế...</p></div>

              </div>
              <div className={cx('row', 'justify-content-around', 'align-items-center', 'boder', 'boders')}>
                <div className={cx('col-lg-3', 'pr-0')}><img src={blog02} className={cx('img', 'pt-2', 'pb-2')}></img></div>
                <div className={cx('col-lg-8', 'pl-0')}><p className={cx('text-black', 'font-text', 'mb-0')}>

                  12 chiếc đồng hồ dành cho nữ giới đắt giá nhất mọi thời đại...</p></div>

              </div>
              <div className={cx('row', 'justify-content-around', 'align-items-center', 'boder', 'boders')}>
                <div className={cx('col-lg-3', 'pr-0')}><img src={blog03} className={cx('img', 'pt-2', 'pb-2')}></img></div>
                <div className={cx('col-lg-8', 'pl-0')}><p className={cx('text-black', 'font-text', 'mb-0')}>
                  10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex...</p></div>

              </div>
              <div className={cx('row', 'justify-content-around', 'align-items-center', 'boder')}>
                <div className={cx('col-lg-3', 'pr-0')}><img src={blog04} className={cx('img', 'pt-2', 'pb-2')}></img></div>
                <div className={cx('col-lg-8', 'pl-0')}><p className={cx('text-black', 'font-text', 'mb-0')}>
                  6 chiếc đồng hồ ấn tượng tại Oscar 2019: Từ những...</p></div>

              </div>
              <div className={cx('row', 'justify-content-around', 'align-items-center', 'boder')}>
                <div className={cx('col-lg-3', 'pr-0')}><img src={blog05} className={cx('img', 'pt-2', 'pb-2')}></img></div>
                <div className={cx('col-lg-8', 'pl-0')}><p className={cx('text-black', 'font-text', 'mb-0')}>

                  Casio sẽ ra mắt đồng hồ thông minh thương hiệu G-...</p></div>

              </div>

            </div>

          </div>
          <div className={cx('col-lg-8')}>
            <div className={cx('row', 'justify-content-between')}>
              <div className={cx('col-lg-3')}>
                <div className={cx('card')}>
                  <img src={blog06} className={cx('card-img-top')} />
                  <div className={cx('card-body')}>
                    <h5 className={cx('card-title')}>Card title</h5>
                    <p className={cx('card-text', 'text-black')}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                  </div>
                </div>
              </div>
              <div className={cx('col-lg-3')}>
                <div className={cx('card')}>
                  <img src={blog07} className={cx('card-img-top')} />
                  <div className={cx('card-body')}>
                    <h5 className={cx('card-title')}>Card title</h5>
                    <p className={cx('card-text','text-black')}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                  </div>
                </div>
              </div>
              <div className={cx('col-lg-3')}>
                <div className={cx('card')}>
                  <img src={blog08} className={cx('card-img-top')} />
                  <div className={cx('card-body')}>
                    <h5 className={cx('card-title')}>Card title</h5>
                    <p className={cx('card-text', 'text-black')}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('row', 'justify-content-between')}>
              <div className={cx('col-lg-3')}>
                <div className={cx('card')}>
                  <img src={blog09} className={cx('card-img-top')} />
                  <div className={cx('card-body')}>
                    <h5 className={cx('card-title')}>Card title</h5>
                    <p className={cx('card-text', 'text-black')}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                  </div>
                </div>
              </div>
              <div className={cx('col-lg-3')}>
                <div className={cx('card')}>
                  <img src={blog10} className={cx('card-img-top')} />
                  <div className={cx('card-body')}>
                    <h5 className={cx('card-title')}>Card title</h5>
                    <p className={cx('card-text', 'text-black')}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                  </div>
                </div>
              </div>
              <div className={cx('col-lg-3')}>
                <div className={cx('card')}>
                  <img src={blog10} className={cx('card-img-top')} />
                  <div className={cx('card-body')}>
                    <h5 className={cx('card-title')}>Card title</h5>
                    <p className={cx('card-text', 'text-black')}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                  </div>
                </div>
              </div>
              
            </div>


          </div>
        </div>
      </div>
      {/* detail  */}

    </>

  )
}

export default Blogs