import React from 'react'
import { servicesApi } from "../../../Service/apiService";
import { useParams } from "react-router-dom";
function CommonProjectsDetails() {
    let { id } = useParams();
    const { data, error, isLoading } = servicesApi.useGetTopThemesProjectQuery(id);
  return (
    <section>
            {data && (
        <div className="common-donate">
        <div className="common-donate-content">
          <div className="container">
            <div className="common-donate-items">
              <div className="common-donate-about">
                <div className="common-donate-image">
                  <img src={data.firstImage} alt="" />
                </div>
                <div className="common-donate-text">
                  <i className="fa-brands fa-pagelines"></i>
                  <span>Həyat Fondu</span>
                  <h4>{data.firstImageTitle}</h4>
                  <p>
                    {data.firstImageText}
                  </p>
                </div>
              </div>
              <div className="common-donate-pay-items">
                <div className="common-donate-pay">
                  <h1>İANƏ ET</h1>
                  <p>
                    Siz bu İanə Et tətbiqindən istidafə edərək Afrikada <br />{" "}
                    yaşayan insanların ehtiyaclarının da qarşılanması üçün <br />{" "}
                    istifadə edə və ianə-i edə bilərsiniz.
                  </p>
                  <h5>İANƏ MƏBLƏĞİ *</h5>
                  <input type="text" name="" id="" />
                  <h5>Ad/Soyad *</h5>
                  <input type="text" name="" id="" />
                  <h5>E-mail *</h5>
                  <input type="text" name="" id="" />
                  <h5>Kart Sahibinin Adı *</h5>
                  <input
                    className="cardname"
                    type="text"
                    name=""
                    id=""
                  />
                  <br />
                  <h5>Kart Nömrəsi *</h5>
                  <input
                    className="cardnumber"
                    type="text"
                    name=""
                    id=""
                    placeholder="0000 0000 0000 0000"
                  />
                  <br />
                  <input
                    className="time"
                    type="text"
                    name=""
                    id=""
                    placeholder="MM/YY"
                  />
                  <input
                    className="cvv"
                    type="text"
                    name=""
                    id=""
                    placeholder="CVV2"
                  />
                  <button>ÖDƏ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  )
}

export default CommonProjectsDetails