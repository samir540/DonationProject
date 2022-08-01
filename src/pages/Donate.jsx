 import React from 'react'
 function Donate({setmodalDonate}) {
   return (
    <div className='onedonate'>
      <div className="onedonate-remove">
<i onClick={()=>setmodalDonate(false)} className="fa-solid fa-xmark"></i>

      </div>
           <div className="onedonate-content">
    <div className="container">
  <div className="onedonate-items">
  <div className='onedonate-about'>
  <div className="onedonate-image">
    <img src="https://ucarecdn.com/61879270-f970-423e-8f53-57c0d8ece6bd/-/resize/940x/-/format/auto/" alt="" />
  </div>
  <div className="onedonate-text">
  <i className="fa-brands fa-pagelines"></i>
    <span>Həyat Fondu</span>
  <h4>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h4>
  <p>Amma biz sizsiz edə bilmərik. Siz bizə fəlakət zamanı insanların həyatını xilas etmək, ən ucqar ərazilərə təmiz su gətirmək, uşaqları, xüsusilə qızları məktəbə göndərmək və qadınların hüquqlarını müdafiə etməkdə kömək edə bilərsiniz.</p>
  </div>
  </div>
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
  </div>
    </div>
     </div>
    </div>
    )
 }
 
 export default Donate