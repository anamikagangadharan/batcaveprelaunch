import React, { useState } from "react";
import css from "./Register.module.css";
import Tick from "../../assets/Tick.svg";

const Register = () => {
  
  const [state, setState] = useState(1);


  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    gender: "",
    city: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function isFormFilled(formData) {
    // Implement your form validation logic here
    // Check if required fields are not empty, etc.
    const {
      full_name,
      email,
      address,
      mobile,
      dob,
      gender,
      city 
    } = formData;
    return (
      full_name.trim() !== "" &&
      email.trim() !== "" &&
      mobile.length !== "" &&
      address.trim() !== "" &&
      dob.trim() !== "" &&
      gender.trim() !== "" &&
      city.trim() !== "" 
    );
  }

  // Usage:
  const formFilled = isFormFilled(formData);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };


  const progressBarStyle = {
    width: '400px', 
    width: state === 1 ? '50%' : state === 2 ? '100%' : '0',
    background: 'linear-gradient(to bottom, rgba(0, 122, 255, 1) 0%, rgba(0, 66, 137, 1) 50%, rgba(0, 25, 52, 1) 100%)',
    transition: 'height 0.3s', // Add a smooth transition effect
    transformOrigin: 'bottom',
    height:"4px"
  }

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <div className={css.left}>
          <div className={css.videobox}></div>
        </div>

        <div className={css.right}>
          <div className={css.rotate}>
 
            <div className={css.rotatehead}>
            <span onClick={() => setState(1)}>Personal Details</span>
            <span onClick={() => setState(2)}>Car Details</span>
            </div>

            <div className={css.progresscontainer}> 
            <div className={css.progress} style={progressBarStyle}></div>   
            </div>
          
          </div>

          <div className={css.formdiv}>

            {/* form-1 */}
            {state === 1 && (
              <form className={css.form1} action="" onSubmit={sendEmail}>
                <div className={css.inputset}>
                  <input
                    name="full_name"
                    onChange={handleChange}
                    value={formData.name}
                    className={css.contactinp}
                    type="text"
                    required
                    placeholder="Full Name"
                  />
                  <div className={css.inputline}></div>
                </div>

                <div className={css.inputset}>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={css.contactinp}
                    type="mail"
                    required
                    placeholder="Email id"
                  />
                  <div className={css.inputline}></div>
                </div>

                <div className={css.inputset}>
                  <input
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className={css.contactinp}
                    type="number"
                    required
                    placeholder="mobile number"
                  />
                  <div className={css.inputline}></div>
                </div>

                <div className={css.inputset}>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={css.contactinp}
                    type="text"
                    required
                    placeholder="residential address"
                  />
                  <div className={css.inputline}></div>
                </div>

                <div className={css.inputset}>
                  <input
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={css.contactinp}
                    type="text"
                    required
                    placeholder="date of birth"
                  />
                  <div className={css.inputline}></div>
                </div>

                <div className={css.inputset}>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className={css.contactinp}
                    id=""
                    placeholder="City"
                  >
                    <option className={css.opt} value="" disabled>
                      {" "}
                      Gender?
                    </option>
                    <option className={css.opt} value="MALE">
                      Male
                    </option>
                    <option className={css.opt} value="FEMALE">
                      female
                    </option>
                    <option className={css.opt} value="OTHER">
                      other
                    </option>
                  </select>
                  <div className={css.inputline}></div>
                </div>

                <div className={css.inputset}>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className={css.contactinp}
                    id=""
                  >
                    <option className={css.opt} value="" disabled>
                      {" "}
                      city
                    </option>

                    <option className={css.opt} value="Bengaluru">
                      Bengaluru
                    </option>
                    <option className={css.opt} value="Chennai">
                      Chennai
                    </option>
                    <option className={css.opt} value="Coimbatore">
                      Coimbatore
                    </option>
                    <option className={css.opt} value="Hyderabad">
                      Hyderabad
                    </option>
                    <option className={css.opt} value="Kochi">
                      Kochi
                    </option>
                    <option className={css.opt} value="Mysore">
                      Mysore
                    </option>
                    <option className={css.opt} value="Thiruvananthapuram">
                      Thiruvananthapuram
                    </option>
                    <option className={css.opt} value="Visakhapatanam">
                      Visakhapatanam
                    </option>
                  </select>
                  <div className={css.inputline}></div>
                </div>

                <button
                  type="submit"
                  onClick={() => (formFilled ? setState(2) : "")}
                  className={css.proceedbtn}
                >
                  PROCEED
                </button>
              </form>
            )}

            {/* form_2 */}

            {state === 2 && (
              <form className={css.form2} action="">

                <div className={css.form2top}>
                
                <div className={css.carinputset}>
                  <div className={css.togglediv}>
                    <input
                      className={css.carinput}
                      type="text"
                      name=""
                      id=""
                      placeholder="do you own a car?"
                    />
                    <input
                      className={css.checkinput}
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleToggleChange}
                      id="switch"
                    />
                  </div>
                  <div className={css.descript}>
                    <span>
                      Your membership will cover one car. You can add more cars
                      later in the Batcave Mobile App.
                    </span>{" "}
                  </div>
                </div>

                <div className={css.carinputset}>
                  <div className={css.regnumbbox}>
                    <input
                      className={!isChecked ? css.inactive : css.carinput}
                      disabled={!isChecked}
                      type="text"
                      name=""
                      id=""
                      placeholder="Car registration number"
                    />
                    <img src={Tick} alt="" />
                  </div>
                  <div className={css.inputline}> </div>
                  <div className={css.dummy}>
                  <span>Content to be added</span>
                </div>
                </div>
                

                <div className={css.carinputset}>
                  <input
                    className={css.carinput}
                    type="text"
                    name=""
                    id=""
                    placeholder="Instagram id(opt)"
                  />

                  <div className={css.inputline}> </div>
                </div>
                </div>
                <div className={css.form2bottom}>
                <div className={css.agree}>
                  <span>
                    by clicking, i agree WITH THE{" "}
                    <span className={css.underline}> privacy policy </span> and{" "}
                    <span className={css.underline}>TERMS & CONDITIONS </span>
                  </span>
                </div>

                <button className={css.proceedbtn}> proceed to checkout</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
