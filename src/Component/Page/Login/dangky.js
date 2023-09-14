import React from 'react'
import classNames from "classnames/bind";
import styles from './Login.module.css'
import {useForm} from 'react-hook-form'
let cx = classNames.bind(styles)
function Dangky() {
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
      const submitForm = (data) => console.log(data);
    return (
      <>
        <div className={cx('col-lg-6')}>
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
                  </div>
      </>
    );
}

export default Dangky;