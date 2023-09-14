import React from 'react';
import classNames from 'classnames/bind';
import style from './Login.module.css';
import fb from '../../../img/fb.png';
import dk1 from '../../../img/dk1.png';
import {useForm} from 'react-hook-form'
import Dangky from './dangky';
const cx = classNames.bind(style);

function Login() {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
      const onSubmit = (data) => console.log(data);
     
  return (
      <>
          <div className={cx('login-signup-main', 'container', 'mt-5')}>

              <div className={cx('row')}>
                  <div className={cx('col-lg-6','boder','mb-5')}>
                      <div className={cx('row')}>
                          <div className={cx('col-lg-2')}></div>
                          <div className={cx('col-lg-8')}>
                              <h4 className={cx('text-center', 'a', 'text-black')}>ĐĂNG NHẬP</h4>
                              <p className={cx('text-center', 'b', 'text-black')}>Chào mừng bạn đã trở lại </p>
                             <form className={cx('form-group')} onSubmit={handleSubmit(onSubmit)}>
                                 <input type="text" className={cx('w-100', 'ipp','h-55')} placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                {errors.Email && <p className={cx("error","color-red")}>Email is  required</p>}        
                             
                               <input className={cx("form-input",'w-100', 'ipp','h-55')} type="password" placeholder="Password" {...register("Password", { required: true, maxLength: 20 })} />
                            {errors.Password && <p className={cx("error", "color-red")}>Password is  required</p>}
                             
                               <input type="submit" className={cx("btn","btn-login",'p-1', 'mt-5', 'w-100', 'btn-a')} />
                             </form>
                              <div className={cx('row', 'justify-content-around', 'mt-5', 'mb-3', 'align-items-center')}>
                                  <div className={cx('login-signup-fix')}></div>
                                  <p className={cx('text-black')}>OR</p>
                                  <div className={cx('login-signup-fix')}></div>
                              </div>
                              <div className={cx('login-signup-google', 'border', 'login-signup')}>
                                  <img src={dk1} alt="" className={cx('fix')} />
                                  <p className={cx('text-center', 'mt-3', 'b', 'text-black')}>Tiếp tục  với  Google</p>
                                  {/* <a href=""><p className={cx('text-center', 'mt-3', 'b', 'text-black')}>Tiếp tục với Google</p></a> */}

                              </div>
                              <div className={cx('login-signup-facebook', 'border', 'login-signup', 'mt-4')}>
                                  <img src={fb} alt="" className={cx('fix')} />
                                  <p className={cx('text-center', 'mt-3', 'b', 'ml-3', 'text-black')}>Tiếp tục với  Facebook</p>
                                  {/* <a href=""><p className={cx('text-center', 'mt-3', 'b', 'ml-3')}>Tiếp tục với  Facebook</p></a> */}

                              </div>
                          </div>
                          <div className={cx('col-lg-2')}><p className="line"></p></div>
                      </div>


                  </div>
                  <Dangky/>

                  {/* <div className={cx('col-lg-6')}>
                      <div className={cx('row')}>
                          <div className={cx('col-lg-2')}></div>
                          <div className={cx('col-lg-8')}>
                              <h4 className={cx('text-center', 'a', 'text-black')}>TẠO TÀI KHOẢN MỚI</h4>
                              <p className={cx('text-center', 'b', 'text-black')}>Tạo tài khoản để đơn giản việc mua sắm, thanh toán nhanh hơn, theo dõi đơn hàng dễ dàng hơn. </p>
                             

                        
                               <form className={cx('form-group')} onSubmit={handleSubmit(submitForm)}>
                                 <input type="text" className={cx('form-input','w-100', 'h-55', 'mt-2')} placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                {errors.Email && <p className={cx("error","color-red")}>Email is  required</p>}        
                             
                            <input className={cx("form-input",'w-100', 'h-55')} type="text" placeholder="Username" {...register("Username", { required: true, maxLength: 80 })} />
                            {errors.Username && <p className={cx("error", "color-red")}>User name is  required</p>}
                               <input className={cx("form-input",'w-100', 'h-55')} type="password" placeholder="Password" {...register("Password", { required: true, maxLength: 20 })} />
                            {errors.Password && <p className={cx("error", "color-red")}>Password is  required</p>}
                             
                               <input type="submit" className={cx("btn","btn-login",'p-1', 'mt-5', 'w-100', 'btn-a')} />
                             </form>
                              <p className={cx('mt-5', 'note', 'text-black')}>Bằng cách nhấp vào đăng ký, bạn đồng ý với các Điều khoản
                                  Dịch vụ và Chính sách quyền riêng tư của chúng tôi</p>
                          </div>
                          <div className={cx('col-lg-2')}></div>
                      </div>
                  </div> */}
              </div>

          </div>






      </>
  )
}

export default Login