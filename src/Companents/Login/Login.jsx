import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import Typewriter from 'typewriter-effect';
function Login() {
  return (
  <section>
    <div className="login">
    <div className="container">
        <div className="login-content">
<div className="login-register">
<div className="login-register-content">
<div className="login-heading">
    <h2>Hesabınıza daxil olun</h2>
    <span>Tək giriş LDAP etimadnaməsini daxil edin.</span>
</div>
<div className="login-input">
    <form> 
    <h5>İstifadəçi adı  <span>*</span></h5><br /><input type="text" name="" id="" /> <br /> 
    <h5>Şifrə  <span>*</span></h5> <br /> <input type="password" name="" id="" />
    </form>
    <div className="login-keep">
        <div className="login-box">

        </div>
        <div className="login-box-writting">
            <span>Məni 30 gün ərzində girişdə saxlayın.</span>
        </div>
    </div>
</div>
<div className="login-button">
    <button onClick={()=> window.location='/'}>Daxil olun</button>
</div>
<div className="login-icon">
<i class="fa-brands fa-google"></i>
<i class="fa-brands fa-facebook-messenger"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-whatsapp"></i>
</div>
<div className="login-register-link">
<p>Hesab lazımdır? <span onClick={()=> window.location='/register'}>Qeydiyyatdan keçmək.</span></p>
<span>İstifadəçi adı və ya parolu unutmusunuz?</span>
</div>
</div>
</div>
<div className="login-item">
<div className="login-logo">
    <div className="login-logo-details">
        <div className="detail">
<div className="detail-icon">
<i classz="fa-solid fa-caret-up"></i>
</div>
        </div>
    </div>
  <span>
  <Typewriter
  options={{
    strings: ['Afrika İanə'],
    autoStart: true,
    loop: true,
  }}
/>
  </span>
</div>
<div className="login-home-link">
<Link to='/' className='span'>Siz bu linkdən istifadə edərək qeydiyyatdan keçmədən <br /> Əsas Səhifəyə daxil ola bilərsiniz</Link>

</div>
<div className="login-link">
<span>İstifadə qaydaları</span>
<span className='gap'>Kömək edin</span>
<span>Gizlilik Siyasəti</span>
</div>
</div>
        </div>
    </div>
</div>
  </section>
  )
}

export default connect()(Login)