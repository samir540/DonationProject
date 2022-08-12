import React from 'react'
import Footer from '../Companents/Footer/Footer'
import {useNavigate} from "react-router-dom";
function About() {
  const nav = useNavigate();
  return (
    <section>
      <div data-aos="fade-up" className='About'>
        <div className="About-overlay"></div>
        <div className="container">
          <div className="About-item">
            <h1 data-aos="fade-up">HAQQIMIZDA</h1>
          </div>
        </div>
        <div className="about-animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div data-aos="fade-up" className="About-text">
        <p><a href='/'>HƏYAT FONDU</a> qeyri-kommersiya təşkilatıdır. Uzun müddətdir biz  etibarlı,  icma tərəfindən <br /> idarə olunan təşkilatlara dünyamızı daha yaxşı bir yerə çevirmək üçün lazım olan alətlərə, <br /> təlimlərə və dəstəyə daxil olmaqda kömək etmişik.
        Biz insanların potensialına inanırıq. <br /> Biz potensialı dəstəkləyirik  və nəticələrimiz dəyişdirilən həyatlarla ölçülür. Hər kəsin <br /> hekayəsi  unikaldır və proqramlarımız onların faydalandığı insanlar qədər müxtəlifdir.
        </p>
      </div>
      <Footer />
    </section>
  )
}

export default About