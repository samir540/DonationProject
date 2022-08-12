import React from 'react'
import Footer from '../Companents/Footer/Footer'
import { servicesApi } from "../Service/apiService";
import BasePartner from "../Companents/BasePartner/BasePartner";
import BrandPartner from '../Companents/BrandPartner/BrandPartner';
function Partners() {
  const { data: basepartners } = servicesApi.useGetBasePartnersQuery();
  const { data: brandpartners } = servicesApi.useGetBrandPartnersQuery();
  return (
    <section>
      <div data-aos="fade-up" className='partners'>
        <div className="container">
          <div className="partners-heading">
            <h1 data-aos="fade-up">TƏRƏFDAŞLARIMIZ</h1>
          </div>
        </div>
      </div>
      <div className="partners-items">
        <div className="container">
          <div data-aos="fade-up" className="partners-items-heading">
            <h1>Bütün dəyərli,
              hörmətli tərəfdaşlar, səfirlər,
              və əziz könüllülər</h1>
            <span>TƏŞƏKKÜRLƏR</span>
          </div>
          <div className="partners-item-logo">
            <div data-aos="fade-right" className="orange-logo">
              <div className="orange-logo-text">
                <h1>BİR İANƏ FONDU</h1>
                <img src="https://www.onedrop.org/workspace/uploads/rich-content/1d-signature-guy-laliberte-en-1552058036.png" alt="" />
              </div>
            </div>
            <div data-aos="fade-left" className="gray-logo">
              <div className="container">
                <div className="gray-logo-heading">
                  <h1>TƏSİSÇİ TƏRƏFDAŞ</h1>
                </div>
                <div className="gray-logo-items">
                  <div className="gray-logo-image">
                    <img src="https://www.onedrop.org/image/1/512/0/uploads/rich-content/cds_groupe_an_bw_lightback-en-1550002446.png" alt="" />
                  </div>
                  <div className="gray-logo-text">
                    <h3>Qurucu tərəfdaşımızın sarsılmaz öhdəliyi  və əvəzsiz dəstəyi proqramlarımızın uğurunu  təmin edən və bizi hər gün ruhlandıran şeydir.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="base-partners">
     <div className="container">
     <div data-aos="fade-up" className="base-partners-heading">
     <h1>ƏSAS PARTNYOTLAR</h1>
      </div>
      <div data-aos="fade-up" className="base-partners-content">
       {basepartners &&
                basepartners.map((a) => <BasePartner key={a.id} partner={a} />)} 
       </div>
     </div>
     </div>
      <div className="brand-partners">
        <div className="container">
          <div className="brand-partners-heading">
            <h1 data-aos="fade-up">BREND PARTNYORLAR</h1>
          </div>
          <div data-aos="fade-up" className="brand-partners-content">
          {brandpartners &&
                brandpartners.map((a) => <BrandPartner key={a.id} partner={a} />)}
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Partners