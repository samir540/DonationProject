import React from 'react'
import Footer from '../Companents/Footer/Footer'
import {useNavigate} from "react-router-dom";
function About() {
  const nav = useNavigate();
  return (
    <section>
      <div className='About'>
        <div className="About-overlay"></div>
        <div className="container">
          <div className="About-item">
            <h1>HAQQINDA</h1>
            <h2>Biz dəyişənlərin qlobal birliyiyik.</h2>
            <p>Biz insanların potensialına inanırıq. Biz potensialı dəstəkləyirik və  nəticələrimiz dəyişdirilən həyatlarla ölçülür. <br /> Hər kəsin hekayəsi unikaldır və proqramlarımız onların faydalandığı insanlar qədər müxtəlifdir.</p>
          </div>
        </div>
        <div className="about-animation">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="base">
        <div className="container">
          <div className="base-content">
            <ul>
              <li className='step-first'>
                <div className="base-content-heading">
                  <h1>ONE DONATE HAQQINDA</h1>
                  <p>Xeyriyyəçiliyə yanaşmamız sadədir -- biz insanlara inanırıq. <br /> Biz potensialı dəstəkləyirik və nəticələrimiz dəyişdirilən <br /> həyatlarla ölçülür.</p>
                  <button>DAHA ÇOX OXU</button>
                </div>
                <div className="base-content-image-step-first">
                  <div className="first-image">
                    <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />

                  </div>
                  <div className="second-image">
                    <img className='img' src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="" />

                  </div>
                </div>
              </li>

              <li className='step-second'>
                <div className="base-content-image-step-second">
                  <div className="first-image">
                    <img src="https://assets.obakkifoundation.org/get-involve/_1280xAUTO_crop_center-center_90/gabriel-3.jpg" alt="" />

                  </div>
                  <div className="second-image">
                    <img className='img' src="https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="" />

                  </div>
                </div>
                <div className="base-content-heading">
                  <h1>TƏRƏFDAŞLARIMIZ</h1>
                  <p>Korporativ tərəfdaşlarımızın, sponsorlarımızın və müdafiəçilərimizin dəstəyi olmadan gördüyümüz işi görə bilməzdik. Qlobal birliyimiz bizə təsirli dəyişiklik etməyə imkan verir.</p>
                  <button onClick={()=>nav("/partners")}>DAHA ÇOX OXU</button>
                </div>
              </li>

              <li className='step-third'>
                <div className="base-content-heading">
                  <h1>TƏSİSÇİ İLƏ TANIŞ OLUN</h1>
                  <p>Treana Peake insanların potensialından ilhamlanan bir sahibkar, natiq və humanitardır. Bir xeyirxahlıq onu 8 yaşında ikən xeyriyyəçilik yoluna çıxardı.</p>
                  <button>DAHA ÇOX OXU</button>
                </div>
                <div className="base-content-image-step-third">
                  <img src="https://assets.obakkifoundation.org/get-involve/_1280xAUTO_crop_center-center_90/conversation-2.jpg" alt="" />
                  <img className='img' src="https://images.unsplash.com/photo-1627423896085-e3e694d88e40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="general">
        <div className="container">
          <div className="general-item">
            <div className="general-heading">
              <h5>HEKAYƏLƏR</h5>
              <h2>Biz İnsanlara İnanırıq</h2>
              <span>İşimizə ilham verən inanılmaz insanların hekayələrini oxuyun. Bizi <br /> dəyişiklik yaratmağa həvəsləndirən insanlardır.</span>
            </div>
            <div className="general-project-link">
              <span>BÜTÜN HEKAYƏLƏRƏ BAXIN</span>
            </div>
          </div>
          <div className="general-content">
            <div className="general-box">
              <div className="general-image">
                <img src="https://media.istockphoto.com/photos/south-african-teacher-hands-out-books-in-her-classroom-picture-id471460287?b=1&k=20&m=471460287&s=170667a&w=0&h=M-cR_kfbRAhhvaYqF2jp-W_wsc7ZauYQORdc507pZYg=" alt="" />

              </div>
              <div className="general-text">
                <h3>Bir bağ necə bir təhsilə çevrildi</h3>
                <p>Orada heç bir təhsili olmayan uşaqlar bir bağ ilə başladı.</p>
              </div>
              <div className="general-about-link">
                <span>HEKAYƏLƏRİNİ OXUYUN</span>
              </div>
            </div>
            <div className="general-box">
              <div className="general-image">
                <img src="https://media.istockphoto.com/photos/african-girls-picture-id482990981?k=20&m=482990981&s=612x612&w=0&h=_8qzsxlouWdItZBzx216sTmNCsvN1cZdFoLps5zMrUo=" alt="" />
              </div>
              <div className="general-text">
                <h3>Arzular</h3>
                <p>Onlarında bizim kimi arzuladıqları şeylər var,Oxumaq...</p>
              </div>
              <div className="general-about-link">
                <span>HEKAYƏLƏRİNİ OXUYUN</span>
              </div>
            </div>
            <div className="general-box">
              <div className="general-image">
                <img src="https://media.istockphoto.com/photos/teacher-reading-a-book-with-a-class-of-preschool-children-picture-id484794664?b=1&k=20&m=484794664&s=170667a&w=0&h=4QIbt8m2nAxZxufdDE3mLZeSULq56TC_hNeZvgG9TeA=" alt="" />
              </div>
              <div className="general-text">
                <h3>Cənubi Sudan</h3>
                <p>Cənubi Sudanın balaca sakinləri ilə tanış <br /> olun.</p>
              </div>
              <div className="general-about-link">
                <span>HEKAYƏLƏRİNİ OXUYUN</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default About