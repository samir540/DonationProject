import React from 'react'
import Footer from '../Companents/Footer/Footer'
import AOS from "aos"
import "aos/dist/aos.css";
import {connect} from "react-redux"
function Home() {
    AOS.init({
        duration: 1500,
        easing: 'ease'
    });
    return (
        <section>
            <div className="contain">
                <div className="contain-overlay"></div>
                <div className="container">
                    <div className="contain-content">
                        <div className="contain-items">
                            <div className="contain-heading">
                                <h6>BİZİM XEYİRLİYƏ YANAŞIMIMIZ SADƏDIR</h6>
                                <h1>Afrikaya Davamlı Layihələrlə <br /> Dəstək.</h1>
                                <p>Afrika ağır vəziyyətdədir və bir çoxları iqtisadi <br /> mübarizələr səbəbindən ailələrini dolandıra bilmirlər.</p>
                          <button onClick={()=>window.location="/projects"}>Sosyal Layihələr<i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div className='contain-onedonate-about'>
  <div className="contain-onedonate-image">
    <img src="https://ucarecdn.com/61879270-f970-423e-8f53-57c0d8ece6bd/-/resize/940x/-/format/auto/" alt="" />
  </div>
  <div className="contain-onedonate-text">
  <i className="fa-brands fa-pagelines"></i>
    <span>Həyat Fondu</span>
  <h4>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h4>
  <p>Amma biz sizsiz edə bilmərik. Siz bizə fəlakət zamanı insanların həyatını xilas etmək, ən ucqar ərazilərə təmiz su gətirmək, uşaqları, xüsusilə qızları məktəbə göndərmək və qadınların hüquqlarını müdafiə etməkdə kömək edə bilərsiniz.</p>
  <div className="contain-onedonate-button">
  <button>İanə Et</button>
 </div>
  </div>
  </div>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-heading">
                            <h5>BİZİM HAQQIMIZDA</h5>
                            <h2>Biz Dəyişiklik Yaradanların Qlobal Birliyiyik</h2>
                            <span>Biz potensialı dəstəkləyirik və nəticələrimiz dəyişdirilən həyatlarla <br />  ölçülür. Boşluqları müəyyən etməklə və davamlı həll yollarına strateji <br /> sərmayə qoymaqla biz real və davamlı dəyişikliyi asanlaşdıra bilirik. <br /> Biz 100% modelimizlə fəxr edirik - Afrika İanə Fonduna ianə etdiyiniz <br /> zaman töhfənizin 100%-i birbaşa proqramlarımıza gedir.</span>
                        </div>
                        <div className="hero-about">
                            <a href='/about'>BIZIM HEKAYƏMİZ
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="head">
                <div className="container">
                    <div className="head-content">
                        <div className="head-heading">
                            <h5>BİZİM TƏSİRİMİZ</h5>
                            <h3>NÖMRƏLƏRƏ GÖRƏ</h3>
                            <span>İnanırıq ki, uğur dəyişdirilmiş həyatlarla <br /> ölçülməlidir.Biz potensiala diqqət yetirərək <br /> fərdlər və icmalarla tərəfdaşlıq qurmağa <br /> diqqət yetiririk. Birlikdə 3 milyona yaxın <br /> insana kömək etdik və biz yeni başlayırıq.</span>
                        </div>
                        <div className="head-box">
                            <img src="https://media.istockphoto.com/photos/african-little-girls-are-learning-english-language-orphanage-in-kenya-picture-id636215476?b=1&k=20&m=636215476&s=170667a&w=0&h=3XHbwlABL0dw-CvlVNFEP6FUecgFM9ZUP_8kMTqQDNw=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="title">
                <div className="container">
                    <div className="title-item">
                        <div className="title-heading">
                            <h5>BİZİM İŞİMİZ</h5>
                            <h2>İnsanlar vasitəsilə layihələr</h2>
                            <span>Proqramlarımız fərdlər və icmalar üçün gəlir əldə etməyə yönəlib. Biz <br /> müasir xeyriyyəçiliklə məşğul oluruq - tərəfdaşlıqlar vasitəsilə iqtisadi <br /> sabitlik yaratmaq üçün icmalar və sənətkarlarla işləyirik.</span>
                        </div>
                        <div className="title-project-link">
                            <a href='/projects'>BÜTÜN LAYİHƏLƏRƏ BAXIN</a>
                        </div>
                    </div>
                    <div className="title-content">
                        <div className="title-box">
                            <div className="title-image">
                                <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80x" alt="" />
                            </div>
                            <div className="title-text">
                                <h3>Məktəbli Uşaqlar</h3>
                                <p>Missiya uşaqların həyatda və işdə uğur qazanmaq üçün öyrənmə və bacarıqlar qazanmasına əmin olmaqdır.</p>
                            </div>
                            <div className="title-about-link">
                                <span>DAHA ƏTRAFLI</span>
                            </div>
                        </div>
                        <div className="title-box">
                            <div className="title-image">
                                <img src="https://media.istockphoto.com/photos/madagascarshy-and-poor-african-girl-with-headkerchief-picture-id527702615?b=1&k=20&m=527702615&s=170667a&w=0&h=jHy1IYQDs_59WqXR_Ju5YMdZDQ8jqFXjYmS3I8KXk70=" alt="" />
                            </div>
                            <div className="title-text">
                                <h3>Onları Dəstəkləyin</h3>
                                <p>Afrikanın bir çox yerlərində təhsil uşaqlar üçün əlçatmaz sərvətdir. Epidemiya və səfalətin hökm sürdüyü bir ölkədə təhsil ikinci planda qalır.</p>
                            </div>
                            <div className="title-about-link">
                                <span>DAHA ƏTRAFLI</span>
                            </div>
                        </div>
                        <div className="title-box">
                            <div className="title-image">
                                <img src="https://assets.obakkifoundation.org/_720xAUTO_crop_center-center_90/StValentines_Gallery_6_1400x933.jpg" alt="" />
                            </div>
                            <div className="title-text">
                                <h3>Müqəddəs Valentinlər Uşaq Evi</h3>
                                <p>Müqəddəs Valentinlərin unudulmuş uşaqlarına daha parlaq gələcək  bəxş etməyimizə kömək edin.</p>
                            </div>
                            <div className="title-about-link">
                                <span>DAHA ƏTRAFLI</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="common">
                <div className="container">
                    <div className="common-item">
                        <div className="common-heading">
                            <h5>HEKAYƏLƏR</h5>
                            <h2>Biz İnsanlara İnanırıq</h2>
                            <span>İşimizə ilham verən inanılmaz insanların hekayələrini oxuyun. Bizi <br /> dəyişiklik yaratmağa həvəsləndirən insanlardır.</span>
                        </div>
                    </div>
                    <div className="common-content">
                        <div className="common-box">
                            <div className="common-image">
                                <img src="https://media.istockphoto.com/photos/south-african-teacher-hands-out-books-in-her-classroom-picture-id471460287?b=1&k=20&m=471460287&s=170667a&w=0&h=M-cR_kfbRAhhvaYqF2jp-W_wsc7ZauYQORdc507pZYg=" alt="" />

                            </div>
                            <div className="common-text">
                                <h3>Bir bağ necə bir təhsilə çevrildi</h3>
                                <p>Orada heç bir təhsili olmayan uşaqlar bir bağ ilə başladı.</p>
                            </div>
                            <div className="common-about-link">
                                <span>HEKAYƏLƏRİNİ OXUYUN</span>
                            </div>
                        </div>
                        <div className="common-box">
                            <div className="common-image">
                                <img src="https://media.istockphoto.com/photos/african-girls-picture-id482990981?k=20&m=482990981&s=612x612&w=0&h=_8qzsxlouWdItZBzx216sTmNCsvN1cZdFoLps5zMrUo=" alt="" />
                            </div>
                            <div className="common-text">
                                <h3>Arzular</h3>
                                <p>Onlarında bizim kimi arzuladıqları şeylər var,Oxumaq...</p>
                            </div>
                            <div className="common-about-link">
                                <span>HEKAYƏLƏRİNİ OXUYUN</span>
                            </div>
                        </div>
                        <div className="common-box">
                            <div className="common-image">
                                <img src="https://media.istockphoto.com/photos/teacher-reading-a-book-with-a-class-of-preschool-children-picture-id484794664?b=1&k=20&m=484794664&s=170667a&w=0&h=4QIbt8m2nAxZxufdDE3mLZeSULq56TC_hNeZvgG9TeA=" alt="" />
                            </div>
                            <div className="common-text">
                                <h3>Cənubi Sudan</h3>
                                <p>Cənubi Sudanın balaca sakinləri ilə tanış <br /> olun.</p>
                            </div>
                            <div className="common-about-link">
                                <span>HEKAYƏLƏRİNİ OXUYUN</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="object">
                <div className="container">
                    <div className="object-content">
                        <h1>Kitablarımızdan birini satın aldığınız zaman <br /> bizə kömək edirsiniz. </h1>
                    </div>
                </div>
            </div>
            <Footer />
            
        </section>
    )
}
const t =a=>{
    return{
        auth:a.auth
    }
}
export default connect(t)(Home)