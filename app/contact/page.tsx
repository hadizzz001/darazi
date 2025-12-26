"use client"

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import {sendEmail} from '../api/sendEmail/sendEmail'
import { MapPin, Phone, MessageCircle } from "lucide-react";

 

 


export default function Home() { 
      const router = useRouter(); 
      const [inputs, setInputs] = useState({});
      const [active, setActive] = useState(false) 
      const [value, setValue] = useState(''); 
  
       
  
      const handleChange = (e: any) => { 
          if(e.target.name == "phone"){ 
              const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
              setValue(numericValue);
          }
  
          const name = e.target.name;
          const value = e.target.value;
          setInputs((prevState) => ({ ...prevState, [name]: value}));
      };
   
  


  return (
    <>


      <div className="">
        <div className="container-xl">
          <br />
          <h4 className="br_text-2xl-serif md:br_text-3xl-serif" style={{textAlign:"center"}}>GET IN TOUCH</h4>

        </div>
      </div>
      <div className="container-xl mt-5">
        <div>
          <div className="pl-5 pt-4 pr-5"> 
            <form action={async formData => { await sendEmail(formData); }}>
 
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                      />
                    </div> 
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control"
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={value} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <textarea
                        className="form-control form-control-text-area"
                        name="message"
                        placeholder="Message"
                        rows={9}
                        required
                        onChange={handleChange}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                 
              </div>
              <div className="form-group row pt-2">
              <div className="col-md-5"></div>
                <div className="col-md-2">
                  <button type="submit" className="klaviyo_submit_button" style={{padding:"1.5em"}}>
                    Send
                  </button>
                </div>
                <div className="col-md-5"></div>
              </div>
              <br />
            </form>
          </div>
        </div>
        

<div className="contact-info-wrapper mt-10 mb-10">
  <div className="contact-info-list">

    {/* Location 1 */}
    <div>
      <div className="contact-info-title">
        <MapPin size={18} />
        Bourjein – Chouf
      </div>

      <div className="contact-info-sub">
        Main Road
      </div>

      <a
        href="https://wa.me/96176322409"
        target="_blank"
        className="contact-info-link whatsapp"
      >
        <MessageCircle size={16} />
        WhatsApp +961 76 322 409
      </a>
    </div>

    {/* Location 2 */}
    <div>
      <div className="contact-info-title">
        <MapPin size={18} />
        Saida
      </div>

      <div className="contact-info-sub">
        Rahbet Street
      </div>

      <a
        href="https://wa.me/96179031452"
        target="_blank"
        className="contact-info-link whatsapp"
      >
        <MessageCircle size={16} />
        WhatsApp +961 79 031 452
      </a>
    </div>

    {/* Customer Service */}
    <div>
      <div className="contact-info-title">
        <Phone size={18} />
        Customer Service
      </div>

      <a
        href="tel:+96170985822"
        className="contact-info-link phone"
      >
        <Phone size={16} />
        +961 70 985 822
      </a>
    </div>

  </div>
</div>


      </div>
      <div className="clearfix" />
      
    </>

  )
}
