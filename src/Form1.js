import React, { useState } from 'react'
import './form.css'
import Box from '@mui/material/Box';


export const Form1 = () => {
    const[qty,setQty]=useState({
        xsquantity :0,
        squantity : 0,
        mquantity : 0,
        lquantity : 0,
        xlquantity : 0,
        response : 0,
        // optimization : 0,
        section508 :[],
        layout :[],
        compatibitity : [],
        interactivity : [],
        jsfunctionality : [],
        css_jsoptions : []
    })
 
    const handleoptimization = (e) => {
      const fieldname = e.target.name
      // [...old] to create a new array out of the previous values. Protects against mutation
      const options = [...qty[fieldname]] // Access object as an array for computed property name
    
      if (e.target.checked) {
        options.push(e.target.value)
      } else {
        let index = options.indexOf(e.target.value)
        options.splice(index, 1)
      } 
      // use same computed property name as above
      setQty({ ...qty, [fieldname]: options})
    }
  

 

 const [openXS,setOpenXS] = useState(false)
 const [openS,setOpenS] = useState(false)
 const [openM,setOpenM] = useState(false)
 const [openL,setOpenL] = useState(false)
 const [openXL,setOpenXL] = useState(false)
 const [opentotal,setOpentotal] = useState(false)
 const [openoptiontotal,setoptiontotal] = useState(false)
 const  [response1,setResponse1] = useState(false)
 const  [response2,setResponse2] = useState(false)
 const  [response3,setResponse3] = useState(false)

 

 console.log(qty.xsquantity)
 var xs = qty.xsquantity * 99
 var s = qty.squantity * 199
 var m = qty.mquantity * 398
 var l = qty.lquantity * 789
 var total = xs+s+m+l

 var xseta = qty.xsquantity * 2
 var seta = qty.squantity * 2
 var meta = qty.mquantity * 3
 var leta = qty.lquantity * 3


 var optiontotal  = Math.ceil((total*Number(qty.response))/100)
console.log(total,Number(qty.response),optiontotal)

var finaltotal = total+optiontotal

 
 var etatotal = xseta+seta+meta+leta

const handleoptions = (name, operation) => {
    setQty((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? qty[name] + 1 : qty[name] - 1,
      };
    });
    
  };

  const handleresponseoptions = (name, value) => {
    setQty((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log("response",qty.response)
  
  const close=(val)=>{
    console.log(val)
    val===0 ?setOpenXS(false) :setOpenXS(true)
  }
  //  const handleoptimization=(e)=>{
  //   const {name,value,checked} = e.target
  //   console.log("%",name)
  //   if (checked){
  //     console.log("optimize",e,value,checked,name)
  //     setQty((prev) => {
  //       return {
  //         ...prev,
  //         [name]: value,
  //       };
  //     });
  //   }
  //     else { setQty((prev) => {
  //       return {
  //         ...prev,
  //         [name]: 0,
  //       };
  //     });
  //     }
  // }


  console.log("final",qty)
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
                    handleoptions("xsquantity", "d") ; close(qty.xsquantity) ;
                  }}
                  disabled={qty.xsquantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.xsquantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("xsquantity", "i");setOpenXS(true);setOpentotal(true)}}>+</button>
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
                    handleoptions("squantity", "d")
                  }}
                  disabled={qty.squantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.squantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("squantity", "i");setOpenS(true);setOpentotal(true)}}>+</button>
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
                    handleoptions("mquantity", "d")
                  }}
                  disabled={qty.mquantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.mquantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("mquantity", "i");setOpenM(true);setOpentotal(true)}}>+</button>
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
                    handleoptions("lquantity", "d")
                  }}
                  disabled={qty.lquantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.lquantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("lquantity", "i");setOpenL(true);setOpentotal(true)}}>+</button>
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
                    handleoptions("xlquantity", "d")
                  }}
                  disabled={qty.xlquantity <= 0 ? true : false}>-</button>
             <span className='pageselectquantitytext'>{qty.xlquantity}</span>
             <button className='pageselectquantitybtn' onClick={() => {
                    handleoptions("xlquantity", "i");setOpenXL(true);setOpentotal(true)}}>+</button>
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
           <span> Section 508 / WCAG-----------------<input type="checkbox" name="section508" value="15" onChange={handleoptimization} />15%</span>
            </div>
        </div>
        

<div className='responsivenessheader'>
<h3>Responsiveness</h3>
<div className='responsivenesssection'>
  <span>At P2H’s discretion ----------------------<input type="radio" name="responsiveness" value="included" checked="true" />included</span>
 </div>
 <div className='responsivenesssection'>
  <span>I have one resolution----------------------<input type="radio" name="response" value="10"  onClick={()=>{handleresponseoptions("response",10);setResponse1(true);setResponse2(false);setResponse3(false);setoptiontotal(true)}}/>+10%</span>
  </div>
  <div className='responsivenesssection'>
  <span>I have 2 resolutions (e.g. Tablet & Mobile)----------------------<input type="radio" name="response" value="20"  onClick={()=>{handleresponseoptions("response",20);setResponse2(true);setResponse1(false);setResponse3(false);setoptiontotal(true)}} />+20%</span>
  </div>
  <div className='responsivenesssection'>
  <span>I have a design for 3 resolutions and more----------------------<input type="radio" name="response"  value="30"  onClick={()=>{handleresponseoptions("response",30);;setResponse3(true);setResponse2(false);setResponse1(false);setoptiontotal(true)}}/>+30%</span>
  </div>
</div>

<div className="layoutheader">
  <h3>Layout and Look</h3>
  <div className='layoutsection'>
    <span>Retina------------------------<input type="checkbox" name="layout" />included</span>
    <span>Fonts ------------------------<select name="font">
    <option value="google fonts">Volvo</option>
  <option value="@font face">Saab</option>
  <option value="typekit">Mercedes</option>
  <option value="fonts.com">Audi</option>
</select>
    </span>
  </div>
</div>

<div className="compactibilityheader">
  <h6>Compatible with all modern browsers and devices.</h6>
  <div className='compactibility section'>
    <span>Compatible with and tested in/on Google Chrome, Mozilla Firefox, Safari 14+, Opera, Edge, IOS 14+ (IPhone, IPad), Android 9+<input type="checkbox" name="compactibility" />included</span>
    <span>Another/older browser------------------------<input type="checkbox" name="compactibility" value="10" />included</span>
  </div>
</div>

<div className="Interactivityoptionheader">
  <h6>JS/CSS interactivity options</h6>
  <div className='Interactivityoptionsection'>
    <span>Standard interactivity pack<input type="checkbox" name="interactivity" />included</span>
    <span>See what's included</span>
  </div>
</div>

<div className="AdvancedJSfunctionalityheader">
  <h6>Note: our JS development rates are $35-$45 per hour. We will provide the final price upon a thorough analysis of your designs and requirements.</h6>
  <div className='Interactivityoptionsection'>
    <span>Angular--------------------------<input type="checkbox" name="AdvancedJS" />included</span>
    <span>D3--------------------------<input type="checkbox" name="AdvancedJS" />~$45/hr</span>
    <span>jQuery--------------------------<input type="checkbox" name="AdvancedJS" />~$45/hr</span>
    <span>Native JS--------------------------<input type="checkbox" name="AdvancedJS" />~$45/hr</span>
    <span>jQuery UI--------------------------<input type="checkbox" name="AdvancedJS" />~$45/hr</span>
  </div>
  <h5>If you need anything beyond this list, let us know in the Project brief below</h5>
</div>

<div className="AdditionalCSS/JSOptions">
  <h6>Note: our JS development rates are $35-$45 per hour. We will provide the final price upon a thorough analysis of your designs and requirements.</h6>
  <div className='Interactivityoptionsection'>
    <span>Advanced CSS3 Animation--------------------------<input type="checkbox" name="AdditionalCSS_JS" />included</span>
    <span>Advanced Parallax--------------------------<input type="checkbox" name="AdditionalCSS_JS" />~$45/hr</span>
    <span>Google Maps--------------------------<input type="checkbox" name="AdditionalCSS_JS" />~$45/hr</span>
  </div>
</div>

<div>
<h5>If you need anything beyond this list, let us know in the Project brief below</h5>
  
</div>

<div className='projectheader'>
  <h3>Project brief</h3>
  <div className='projectsection'>
    <input type="textarea"/>
  </div>
</div>
<div class="form-box form-box-flex">

<div class="form-box-half">
                    <h3>Attachments</h3>
                    <div class="drop-area attachment-holder">
                      <span class="text-holder">Drop files here, or <input class="input-attachment" name="attach-file" type="file" data-jcf='{"buttonText": "browse/insert a link", "placeholderText": "Custom placeholder"}' multiple/>,<br/>
                        or share from <a href="#" class="dropbox-link">Dropbox</a></span>
                      <ul class="attach-list"></ul>
                      <input type="hidden" name="order[attachment]" class="input-attachment-data"/>
                    </div>
                  </div>

                  <div class="form-box-half">
                                                                                  <h3>Contact details</h3>
                    <div class="form-row">
                      <div class="form-col">
                                                <input type="text" id="order_user_name" name="order[user][name]" placeholder="Name" />
                      </div>
                    </div>
                    <div class="form-row" data-validate-row>
                      <div class="form-col">
                                                <input type="text" id="order_user_phone" name="order[user][phone]" maxlength="20" data-require="phone" placeholder="Phone *" />
                        <span class="error-text">Please enter your phone number</span>
                      </div>
                    </div>
                    <div class="form-row" data-validate-row>
                      <div class="form-col">
                                                <input type="text" id="order_user_email" name="order[user][email]" required="required" data-require="email" placeholder="Email *" />
                        <span class="error-text">Please specify a valid email address</span>
                      </div>
                    </div>
                  </div>
                  </div>

   
    <div className='summaryheader'>
      <h3>SUMMARY</h3>
     {openXS &&  <div className='summarycontent'>
      <button className='summarycontentbtn' onClick={() => {
                    handleoptions("xsquantity", "d");close(qty.xsquantity)
                  }}
                  disabled={qty.xsquantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("xsquantity", "i");}}>+</button>
                     <span className='summarycontenttext'>{`XS ------------${qty.xsquantity} x $99 = $${xs}`}</span>
      </div>
}

{openS &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    handleoptions("squantity", "d")
                  }}
                  disabled={qty.squantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("squantity", "i")}}>+</button>
                     <span className='summarycontenttext'>{`S ------------${qty.squantity} x $199 = $${s}`}</span>
      </div>
}
 
{openM &&  <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    handleoptions("mquantity", "d")
                  }}
                  disabled={qty.mquantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("mquantity", "i")}}>+</button>
                     <span className='summarycontenttext'>{`M ------------${qty.mquantity} x $199 = $${m}`}</span>
      </div>
}

{openL &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    handleoptions("lquantity", "d")
                  }}
                  disabled={qty.lquantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("lquantity", "i")}}>+</button>
                     <span className='summarycontenttext'>{`L ------------${qty.lquantity} x $199 = $${l}`}</span>
      </div>
}

{openXL &&   <div className='summarycontent'>
                     <button className='summarycontentbtn' onClick={() => {
                    handleoptions("xlquantity", "d")
                  }}
                  disabled={qty.xlquantity <= 0 ? true : false}>-</button>
             <button className='summarycontentbtn' onClick={() => {
                    handleoptions("xlquantity", "i")}}>+</button>
                     <span className='summarycontenttext'>{`XL ------------${qty.xlquantity}  = $custom`}</span>
      </div>
}

<div className='summarycontent'>
      {response1 && opentotal && <span> {`I have one resolution ----------+${qty.response}%`}</span>}
      {response2 && opentotal &&  <span> {`I have 2 resolutions (e.g. Tablet & Mobile) ----------+${qty.response}%`}</span>}
      {response3 && opentotal &&  <span> {`I have a design for 3 resolutions and more ----------+${qty.response}%`}</span>}
      </div>
      <div>
      <span>{qty.optimization} </span>
              </div>
 {openoptiontotal &&  opentotal &&  <div className='summarycontent'>
        {`Options Total ----------$${optiontotal}`}
      </div>}
      <hr />
  {opentotal &&   <div className='summarycontent'>
        <span>{`Pages Total ----------$${finaltotal}`} </span>
        </div>
        }

  

{opentotal &&    <div className='summarycontent'>
        <span>{`ETA----------${etatotal} Bussiness days`} </span>
        </div>}

   
    </div>
    </div>

    </>
  )
}

export default Form1
// const handlesetopenXS=(quantity)=>{
//     console.log(openXS)
//     console.log(quantity.qty)
//     quantity.qty > 0 ? setOpenXS(true) :setOpenXS(false)
//     console.log(openXS)
// }