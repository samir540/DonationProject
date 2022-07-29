import React from 'react'
function DonateCause() {
  return (
    <div className="onedonate-content">
    <div className="container">
  <div className="onedonate-items">
<div className="onedonate-pay-items">
<div className="onedonate-pay">
         <h1>İANƏ ET</h1>
         <p>Siz bu İanə Et tətbiqindən istidafə edərək Afrikadı <br /> uşaqların digər ehtiyaclarının da  qarşılanması  üçün <br /> istifadə edə və ianə-i edə bilərsiniz.</p>
        <h5>İANƏ MƏBLƏĞİ *</h5> 
        <input type="text" name="" id="" placeholder='$'/>
        <h5>Kart Sahibinin Adı *</h5>
        <input className='cardname' type="text" name="" id="" placeholder='Javid'/><br />
         <h5>Kart Nömrəsi *</h5>
         <input className='cardnumber' type="text" name="" id="" placeholder='0000 0000 0000 0000'/><br />
         <input className='time'  type="text" name="" id="" placeholder='MM/YY'/>
         <input className='cvv' type="text" name="" id="" placeholder='CVV2'/>
        <button>ÖDƏ</button>
       </div>
</div>
       <div className="onedonate-about">
         <h3>BİZİM SƏBƏBLƏRİMİZ</h3>
          <h4>BİR İANƏ FONDUNA BAĞIŞLAYIN</h4>
          <p>Bir İanə  Fondunda bizim layihələrimiz   bu işlərə yönəlib. Ehtiyacı olan insaları kateqoriyalara <br /> ayırmaq əvəzinə, biz onlara şəraitlərini dəyişdirmək üçün səlahiyyət veririk. Boşluqları müəyyən <br /> etməklə və davamlı həll yollarına strateji sərmayə qoymaqla biz aşağıdakı sahələrdə real dəyişikliyə <br /> kömək edə bilirik: Təmiz Su, Ərzaq Təhlükəsizliyi, Səhiyyə, və Təhsil.</p>
          <img src="https://assets.obakkifoundation.org/Bar-Gak-2013-TT-131205-110013-1.jpg" alt="" />
       </div>
  </div>
    </div>
     </div>
  )
}

export default DonateCause