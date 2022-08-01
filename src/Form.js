import React, { useState } from 'react'
import './form.css'
import Box from '@mui/material/Box';


const Form = () => {
   
 const [quantity,setQuantity]= useState({
  qty : 0
 })
 const [Squantity,setSQuantity]= useState({
  qty : 0
 })
 const [Mquantity,setMQuantity]= useState({
  qty : 0
 })
 const [Lquantity,setLQuantity]= useState({
  qty : 0
 })
 const [XLquantity,setXLQuantity]= useState({
  qty : 0
 })

 const [sectionoptimization,setSectionOptimization] = useState({
    select : false,
    percentage : 0
 })

 const [openXS,setOpenXS] = useState(true)
 const [openS,setOpenS] = useState(true)
 const [openM,setOpenM] = useState(true)
 const [openL,setOpenL] = useState(true)
 const [openXL,setOpenXL] = useState(true)
 const [opentotal,setOpentotal] = useState(true)
 const [openeta,setOpeneta] = useState(true)

 

 console.log(Squantity)
 var xs = quantity.qty * 99
 var s = Squantity.qty * 199
 var m = Squantity.qty * 398
 var l = Squantity.qty * 789
 var total = xs+s+m+l

 var xseta = quantity.qty * 2
 var seta = Squantity.qty * 2
 var meta = Mquantity.qty * 3
 var leta = Lquantity.qty * 3
 
 var etatotal = xseta+seta+meta+leta
//  console.log(xs)

 const handleoptions = (name, operation) => {
  setQuantity((prev) => {
    return {
      ...prev,
      [name]: operation === "i" ? quantity[name] + 1 : quantity[name] - 1,
    };
  });
  
};


const Shandleoptions = (name, operation) => {
  setSQuantity((prev) => {
    return {
      ...prev,
      [name]: operation === "i" ? Squantity[name] + 1 : Squantity[name] - 1,
    };
  });

};

const Mhandleoptions = (name, operation) => {
  setMQuantity((prev) => {
    return {
      ...prev,
      [name]: operation === "i" ? Mquantity[name] + 1 : Mquantity[name] - 1,
    };
  });
};
const Lhandleoptions = (name, operation) => {
  setLQuantity((prev) => {
    return {
      ...prev,
      [name]: operation === "i" ? Lquantity[name] + 1 : Lquantity[name] - 1,
    };
  });
};
const XLhandleoptions = (name, operation) => {
  setXLQuantity((prev) => {
    return {
      ...prev,
      [name]: operation === "i" ? XLquantity[name] + 1 : XLquantity[name] - 1,
    };
  });
};
const handleoptimization=(name)=>{
    setSectionOptimization((prev)=>{
        return{
            ...prev,
            [name]:value
        }
    })
}
console.log(sectionoptimization)
  return (
    <>

    
<div style={{ textAlign: "justify", marginLeft: "30px", width: "100%" }}>
    <div className='pagesection'>
    <h2> Select the required page sizes</h2>
    <div className='pageselectheader'>
      
    <div className='pageselectbutton'>
      <button >XS</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>About Us (text page only), Terms of Use, Privacy Policy, Single Blog Post, 404 page, Other text pages.</span>
        <span className='pageselectexamplestext2'>E.G. Page Height  </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>$99</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~2 Business Days</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("qty", "d") ;
                  }}
                  disabled={quantity.qty <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{quantity.qty}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("qty", "i")}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='pageselectheader'>
    <div className='pageselectbutton'>
      <button >S</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>About Us (beyond text page), FAQ, Contact Us, Testimonials, Our Team..</span>
        <span className='pageselectexamplestext2'>E.G. Page Height 1500 - 2500px  </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>$199</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~2 Business Days</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    Shandleoptions("qty", "d")
                  }}
                  disabled={Squantity.qty <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{Squantity.qty}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    Shandleoptions("qty", "i")}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='pageselectheader'>
    <div className='pageselectbutton'>
      <button >M</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>Portfolio Grid, Case Study, Blog page, Services, eCommerce: Product Page, Account, Cart, Checkout.</span>
        <span className='pageselectexamplestext2'>E.G. Page Height 2500 - 5000px </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>$398</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~3 Business Days</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    Mhandleoptions("qty", "d")
                  }}
                  disabled={Mquantity.qty <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{Mquantity.qty}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    Mhandleoptions("qty", "i")}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='pageselectheader'>
    <div className='pageselectbutton'>
      <button >L</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>Portfolio Grid, Case Study, Blog page, Services, eCommerce: Product Page, Account, Cart, Checkout.</span>
        <span className='pageselectexamplestext2'>E.G. Page Height 2500 - 5000px </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>$398</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~3 Business Days</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    Lhandleoptions("qty", "d")
                  }}
                  disabled={Lquantity.qty <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{Lquantity.qty}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    Lhandleoptions("qty", "i")}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className='pageselectheader'>
    <div className='pageselectbutton'>
      <button >XL</button>
      <div className='pageselectexamples'>
        <span className='pageselectexamplestitle'>examples</span>
        <span className='pageselectexamplestext1'>Please specify your page size in pixels or just attach it to the request.</span>
        <span className='pageselectexamplestext2'>E.G. Page Height  10000px </span>
        </div>
        <div className='pageselectpriceoption'>
          <div className='pageselectpriceoptiondollar'>
            <span>Price</span>
            <span>Custom</span>
            <div className='pageselectpriceoptionETA'>
            <span>ETA</span>
              <span>~Custom</span>
            </div>
          </div>
          <div>
          <div className='pageselectquantityheader'>
            <span>Quantity</span>
            <button className='pageselectquantitybtn' onClick={() => {
                    XLhandleoptions("qty", "d")
                  }}
                  disabled={XLquantity.qty <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{XLquantity.qty}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    XLhandleoptions("qty", "i")}}>+</button>
          </div>
        </div>
      </div>
      </div>
    </div>
   </div>
   </div>

   <div className="optimizationheader">
         <h2>Optimization and Accessbility</h2>
        <div className="optimizationsection">
            <span>We create clean and optimized code that meets the rigorous W3C standards. For its full compliance with the accessibility requirements, select this option:</span>
        </div>
        <div className="optimizationsection">
           <span> Section 508 / WCAG-----------------<input type="checkbox" name="+15%" value="section15%" 
           />15%</span>
            </div>
        </div>
   
    <div className='summaryheader'>
      <h3>SUMMARY</h3>
     {openXS &&  <div className='summarycontent'>
      <button className='summarycontentbtn' onClick={() => {
                    handleoptions("qty", "d")
                  }}
                  disabled={quantity.qty <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("qty", "i")}}>+</button>
                     <span className='summarycontenttext'>{`XS ------------${quantity.qty} x $99 = $${xs}`}</span>
      </div>
}

{openS &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    Shandleoptions("qty", "d")
                  }}
                  disabled={Squantity.qty <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    Shandleoptions("qty", "i")}}>+</button>
                     <span className='summarycontenttext'>{`S ------------${Squantity.qty} x $199 = $${s}`}</span>
      </div>
}
 
{openM &&  <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    Mhandleoptions("qty", "d")
                  }}
                  disabled={Mquantity.qty <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    Mhandleoptions("qty", "i")}}>+</button>
                     <span className='summarycontenttext'>{`M ------------${Mquantity.qty} x $199 = $${m}`}</span>
      </div>
}

{openL &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    Lhandleoptions("qty", "d")
                  }}
                  disabled={Lquantity.qty <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    Lhandleoptions("qty", "i")}}>+</button>
                     <span className='summarycontenttext'>{`L ------------${Lquantity.qty} x $199 = $${l}`}</span>
      </div>
}

{openXL &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    XLhandleoptions("qty", "d")
                  }}
                  disabled={XLquantity.qty <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    XLhandleoptions("qty", "i")}}>+</button>
                     <span className='summarycontenttext'>{`XL ------------${XLquantity.qty}  = $custom`}</span>
      </div>
}

{ opentotal &&   <div className='summarycontent'>
        <span>{`Pages Total ----------$${total}`} </span>
        </div>
        }
  

  {openeta &&      <div className='summarycontent'>
        <span>{`ETA----------${etatotal} Bussiness days`} </span>
        </div>
}
   
    </div>
    

    </>
  )
}

export default Form
// const handlesetopenXS=(quantity)=>{
//     console.log(openXS)
//     console.log(quantity.qty)
//     quantity.qty > 0 ? setOpenXS(true) :setOpenXS(false)
//     console.log(openXS)
// }