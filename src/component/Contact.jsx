import { useEffect, useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const [massages, setmessage] = useState([]);
  const [name, setname] = useState([]);
  const [subject, setsub] = useState([]);
  const [email, setemail] = useState([]);

  //   const Addmessage = () => {

  //     axios.post(`https://62c47caf7d83a75e39fb0ca3.mockapi.io/massages`, {
  //       massages,
  //       name,
  //       email ,
  //       subject,
  //     })
  //   window.alert("message send successfully");
  //   window.location.href = `http://localhost:3001/all-series`;
  //   }

  function Addmessage(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2g5hjbh",
        "template_nk1nx4e",
        e.target,
        "4wzL5Z_AqBhLCFm5q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    document.getElementById("suc").innerHTML = `
    <div class="alert alert-success" role="alert">
    your contact message is sent successfully
  </div>`;
  }

  return (
    <div>
      <div
        class="section section-padding pb-0 container"
        style={{
          color: "black",
          textAlign: "left",
          marginTop: "47px ",
          height: "70vh",
        }}
      >
        <div class="">
          <div class="row learts-mb-n30">
            <div class="col-md-6 col-12 align-self-center learts-mb-30 mt-5 ">
              <img
                src="https://www.sensesofcinema.com/wp-content/uploads/2009/07/1280x800_old-cinema-sign-HD-Wallpaper.jpg"
                alt=""
                class="img-fluid "
              />
            </div>
            <div class="col-md-6 col-12  learts-mb-30 ">
              <div className="formContainer">
                {/* <h4  style={{textAlign: "left" }}>Contact Us</h4> */}
                <h3 class="mt-5 mb-4">
                  {" "}
                  Contact Us Whether you have a question
                </h3>

                {/* <h1 class="display-6 mb-4"> Contact Us Whether you have a question</h1> */}
                <form onSubmit={Addmessage}>
                  <input
                    type="text"
                    class="d-flex flex-row align-items-start form-control mb-3 "
                    placeholder="Your Name*"
                    name="name"
                  />
                  <input
                    type="text"
                    placeholder="Your Email*"
                    name="email"
                    class="d-flex flex-row align-items-start form-control mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    class="d-flex flex-row align-items-start form-control mb-3"
                    name="subject"
                  />
                  <textarea
                    class="d-flex flex-row align-items-start form-control mb-3"
                    placeholder="Message"
                    style={{
                      width: "485px",
                      height: "150px",
                      borderRadius: "7px",
                    }}
                    name="massage"
                  ></textarea>
                  {/* <input type="text" placeholder="Subject" class="d-flex flex-row align-items-start" name="massage" /> */}
                  <button
                    class="btn btn-success px-4 mt-2 col-lg-"
                    data-toggle="modal"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
                <div id="suc" className="mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
