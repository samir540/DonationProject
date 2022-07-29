 import React from 'react'
 import Footer from '../Companents/Footer/Footer'
 import DonateCause from '../Companents/DonateCause/DonateCause'
 function Donate() {
   return (
  <section>
         <div className='onedonate'>
          <div className="onedonate-overlay"></div>
         <div className="container">
         <div className="onedonate-heading">
            <h1>HƏR DOLLARIN ƏHƏMİYYƏTİ</h1>
            <p>Biz 100% modelimizlə fəxr edirik və bu o deməkdir ki, ianənizin hər bir qəpiyi birbaşa humanitar <br /> işimizə gedir.  Heç bir vasitəçi və idarəetmə  xərcləri olmadan, dollarınızın daha da irəli getməsinə <br /> əminik. Dəyişikliyin bir <br /> hissəsi olun və bu gün ianə edin.</p>
          </div>
         </div>
          </div>
     <DonateCause/>
          <Footer/>
  </section>
    )
 }
 
 export default Donate