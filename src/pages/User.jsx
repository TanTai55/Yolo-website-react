import React from 'react';

import Halmet from '../components/Halmet'

import Button from '../components/Button'



const User = () => {
  return (
    <Halmet title="Đăng Nhập">
      <div className="user">
        <div className="user__form">
          <form>
            <div className="user__input">
              <input type="text" placeholder="Nhập số điện thoại của bạn ..." />
              <i class="bx bxs-user"></i>
            </div>
            <div className="user__input">
              <input type="password" placeholder="Nhập mật khẩu của bạn ..."/>
              <i class="bx bxs-lock-alt"></i>
            </div>
            <Button className="btn">Đăng Nhập</Button>
          </form>

          <div class="user__title">
            <a href="/dang-ky"><span>Bạn chưa có tài khoản ?</span></a>
            <div class="user__title__txt">
              <button class="user__title__txt-btn" type="button">
              <a href="https://www.facebook.com/" target="__blank">
                <i class="bx bxl-facebook"></i>
              </a>
               
              </button>
              <button class="user__title__txt-btn" type="button">
                <a href="https://mail.google.com/" target="__blank">
                  <i class="bx bxl-google"></i>
                </a> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </Halmet>
  );
};


export default User;
