import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>


      <div className="flex flex-col items-center py-10">
        <div className="flex flex-col text-center">
          <div className="title-holder">
            <div>
              <h2 class="font-semibold text-3xl md:text-4xl">The Way to Contact Us</h2>
            </div> <br/>
            <div className="">
              <p>
                Delivering Exceptional Care and Advanced Medical
              </p>
              <p>
                Solutions for Your Health and Well-being

              </p> <br/>
            </div>
          </div>
          <div className="justify-center">
            <div className="email-contact-form">
              <form className="flex flex-col justify-center space-y-2 space-x-2">
                <div className="">
                  <input type="text" placeholder="Your Email" class="border border-green-600 p-2"></input>
                  <input type="text" placeholder="Your Name" class="border border-green-600 p-2"></input>
                </div>
                <div className="message-holder">
                  <textarea rows='5'cols='50'
                    placeholder="Your Message"
                    class="border border-green-600 text-gray-400 p-2 h-32 "
                  ></textarea>
                </div>
                <div class="bg-green-500 rounded-none text-white p-2 ">
                  <input
                    type="Submit"
                    className="button"
                    value="Submit"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="">
          <div className="bg-green-400 text-white p-2">APPOINTMENT</div>
          <div className="text-left">
            <h2 class="font-semibold text-4xl">Get in Touch with Us We’re Here to Help!</h2>
            <p className="text-gray-500 p-2">
              Delivering Exceptional Care and Advanced Medical Solutions for
              Your Health and Well-being
            </p>
          </div>
          <div>
            <form className="">
              <input type="text" placeholder="Your Email" class=" border border-green-600 p-5"></input>{" "}
              <br />
              <br />
              <textarea placeholder="Your Message" class="border border-green-600 text-gray-400 p-5 h-32"></textarea>
              <div class="button-holder">
                <input type="Submit" className="bg-green-500  text-white" value="Submit"></input>
              </div>
            </form>
          </div>
        </div>
        <div class="image-holder">
          <div>
            {" "}
            <img
              src="/Image.jpg"
              alt="image of a doctor diagnosing a patient"
            />{" "}
          </div>
          <div className="flex flex-row ">
            <div >
              <p>555-0198</p>
              <p>123 Maple, Spriengfield, IL 62701</p>
            </div>
            <div className="pl-6"> Monday - Saturday: 9 am - 11.30 pm</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
