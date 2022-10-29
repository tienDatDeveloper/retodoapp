import React from 'react'
import './Modal.css';

function Modal({closeModal}){
  return <div className="modalBackground">
    <div className="modalContainer">
      <button className="closebtn" onClick={() => closeModal(false)}>X</button>
      <div className="title">
        <h3>HELLO!! THIS IS MY PROFILE</h3>
      </div>
      <div className="headerbody">
        <p className="titleNameSchool">Đại Học Sư Phạm TPHCM</p>
      </div>
        <div className="logo">
          <img src="/logoavatar.jpg" width="200" height="200"/>
        </div>
      <div className="bodytitle">
        <p className="titleProfile">Trần Minh Long</p>
        <p className="titleProfile">MSSV: 4501104132</p>
        <p className="titleProfile">Khoa: Công Nghệ Thông Tin</p>
      </div>
      <div class="iconsocial">
        <ul>
          <a href="#" class="fa fa-facebook" target="_blank"></a>
          <a href="#" class="fa fa-google"></a>
        </ul>
      </div>
      <div className="footer">
        <button className="btnCancel" onClick={() => closeModal(false)}>Cancel</button>
      </div>
    </div>
  </div>
}
export default Modal;