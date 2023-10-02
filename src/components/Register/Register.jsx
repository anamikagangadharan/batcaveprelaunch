import React, { useState } from "react";
import css from "./Register.module.css";
import Tick from "../../assets/Tick.svg";
import { motion } from "framer-motion";
import Hclose from "../../assets/close-hexagon.svg"
import { Link } from "react-router-dom";
import RegImg from "../../assets/reg-image.svg"


const Register = () => {
  

  const [state, setState] = useState(1);

  const[openedt,setOpenedt]=useState(false)
  const[openedp,setOpenedp]=useState(false)



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
  const sendEmail2 = (e) => {
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
    // width: '400px', 
    width: state === 1 ? '50%' : state === 2 ? '100%' : '0',
    background: 'linear-gradient(to bottom, rgba(0, 122, 255, 1) 0%, rgba(0, 66, 137, 1) 50%, rgba(0, 25, 52, 1) 100%)',
    transition: 'height 0.3s', // Add a smooth transition effect
    transformOrigin: 'bottom',
    height:"4px"
  }
  // const spanStylePersonal = {
  //   color: state===1 ? 'yellow;' : '#505050',
  // };
 


  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <div className={css.left}>
          {/* <div className={css.videobox}></div> */}
          <img src={RegImg} alt="" />
        </div>

        <div className={css.right}>
          <div className={css.relativediv}>
          <div className={css.rotate}>
 
            <div className={css.rotatehead}>
            <span className={state===1 ? css.p1: css.p2} onClick={() => setState(1)}>Personal info</span>
            <span className={state===2 ? css.c1: css.c2}   onClick={() => setState(2)}>car & social info</span>
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
              <form className={css.form2} action="" onSubmit={sendEmail2}>

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

                <div className={css.carinputset}>
                  <select
                    name="size"
                    required
                    className={css.carinput}
                    id=""
                    placeholder="t - shirt size"
                    defaultValue="" 
                  >
                    <option className={css.opt} value="" disabled>
                      {" "}
                      t - shirt size
                    </option>
                    <option className={css.opt} value="s">
                      S
                    </option>
                    <option className={css.opt} value="m">
                      M
                    </option>
                    <option className={css.opt} value="l">
                      L
                    </option>
                    <option className={css.opt} value="xx">
                      xl
                    </option>
                    <option className={css.opt} value="xxl">
                      xxl
                    </option>
                  </select>
                  <div className={css.inputline}></div>
                </div>

                <div className={css.btns}>
                  <button className={css.yrbtn}>yearly subscription</button>
                  <button className={css.labtn}>Lifetime access</button>
                </div>

                </div>


                <div className={css.form2bottom}>
                <div className={css.agree}>
                  <span>
                    by clicking, i agree WITH THE{" "}
                    <span onClick={()=>setOpenedp(!openedp)} className={css.underline}> privacy policy </span> and{" "}
                    <span onClick={()=>setOpenedt(!openedt)} className={css.underline}>TERMS & CONDITIONS </span>
                  </span>
                </div>

              <Link to="/checkout"> <button type="submit" className={`${css.proceedbtn} ${css.buttonWithZIndex}`}> proceed to checkout</button></Link>  
                </div>
              </form>
            )}
          </div>
          </div> 
        </div>
      </div>

      {/* terms and conditions */}

      {openedt && <motion.div className={css.tandc}
       initial={{opacity:0,x:130}}
       whileInView={{opacity:1, x:0}}
       transition={{duration:1.5}}
      ><div className={css.head}>
      <span>Terms & conditions</span>
      <img onClick={()=>setOpenedt(false)} src={Hclose} alt="" />
  </div>
  <div className={css.content}>
<span className={css.thead}>Batcave Membership Terms and Conditions</span>

<span className={css.tcontent}>These terms and conditions ("Terms") govern your membership with Batcave ("Club"). By registering and becoming a member, you agree to comply with these Terms. Please read them carefully.</span>

<span className={css.thead}>1. Membership Eligibility:</span>
 <span className={css.tcontent}>- Membership is open to individuals who meet the Club's criteria.</span>
<span className={css.tcontent}>- Members must be at least 18 years old.</span>

<span className={css.thead}>2. Membership Benefits:</span>
<span className={css.tcontent}>- Members gain access to exclusive Club events, discounts, and privileges as outlined by the Club.</span>
<span className={css.tcontent}>- Benefits may be subject to change at the discretion of the Club.</span>

<span className={css.thead}>3. Membership Duration:</span>
 <span className={css.tcontent}>- Membership duration for Batcave OGs is Lifetime from the date of registration.</span>
 <span className={css.tcontent}>- Memberships are only transferable to the heir for the holder and attract a nominal transfer fee.</span>

<span className={css.thead}>4. Registration and Fees:</span>
 <span className={css.tcontent}>- Membership registration requires payment of the specified fee.</span>
 <span className={css.tcontent}>- Membership fees are non-refundable.</span>

<span className={css.thead}>5. Code of Conduct:</span>
<span className={css.tcontent}>- Members must adhere to the Club's code of conduct during Club events and interactions.</span>
 <span className={css.tcontent}>- Inappropriate behaviour may result in membership termination.</span>

<span className={css.thead}>6. Privacy and Data:</span>
 <span className={css.tcontent}>- The Club will handle your personal information in accordance with its privacy policy.</span>
 <span className={css.tcontent}>- Your information may be used for Club communications and promotions.</span>

<span className={css.thead}>7. Termination:</span>
 <span className={css.tcontent}>- The Club reserves the right to terminate or suspend a membership for violation of these Terms or any disruptive behaviour.</span>

<span className={css.thead}>8. Disclaimers:</span>
 <span className={css.tcontent}>- The Club is not responsible for any accidents, damage, or loss that may occur during Club events.</span>
 <span className={css.tcontent}>- Members are responsible for their own safety and the safety of their property.</span>

<span className={css.thead}>9. Changes to Terms:</span>
 <span className={css.tcontent}>- The Club may modify these Terms at any time. Members will be notified of changes.</span>

<span className={css.thead}>10. Governing Law and Jurisdiction:</span>
 <span className={css.tcontent}>- These Terms are governed by the laws of the State of Tamil Nadu, India.</span>
 <span className={css.tcontent}>- Any disputes or legal proceedings arising from these Terms will be subject to the exclusive jurisdiction of the courts located in Coimbatore, Tamil Nadu, India.</span>
�
<span className={css.tcontent}>By registering for Batcave OGs membership, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</span>
</div>
        </motion.div>}


{/* privacy */} 
{openedp && <motion.div className={css.privacypolicy}
       initial={{opacity:0,x:130}}
       whileInView={{opacity:1, x:0}}
       transition={{duration:1.5}}
      >
        <div className={css.head}>
      <span>privacy policy</span>
      <img onClick={()=>setOpenedp(false)} src={Hclose} alt="" />
  </div>
  <div className={css.content}>
  <span className={css.phead}>Effective Date: 10-10-2023</span>

<span className={css.phead}>1. Introduction:</span>

<span className={css.pcontent}>Welcome to Batcave ("Club"). This Privacy Policy outlines how we collect, use, and protect your personal information. By becoming a member of our club, you agree to the terms and practices described in this policy.</span>

<span className={css.phead}>2. Information We Collect:</span>

<span className={css.pcontent}>We may collect the following types of personal information:</span>
<span className={css.pcontent}>- Contact Information: Name, email address, phone number, and address.</span>
<span className={css.pcontent}>- Membership Information: Details related to your membership, including payment information and details relevant to your car.</span>
<span className={css.pcontent}>- Communication Preferences: Your preferences for receiving communications from the Club.</span>
<span className={css.pcontent}>- Event Participation: Information related to your participation in club events and activities.</span>

<span className={css.phead}>3. How We Use Your Information:</span>

<span className={css.pcontent}>We use your personal information for the following purposes:</span>
<span className={css.pcontent}>- To manage and administer your club membership.</span>
<span className={css.pcontent}>- To communicate with you about club events, news, and updates.</span>
<span className={css.pcontent}>- To personalise your club experience.</span>
<span className={css.pcontent}>- To process payments for membership fees and event registrations.</span>
<span className={css.pcontent}>- To comply with legal obligations.</span>

<span className={css.phead}>4. Data Security:</span>

<span className={css.pcontent}>We take reasonable measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction.</span>

<span className={css.phead}>5. Third-Party Disclosure:</span>

<span className={css.pcontent}>We do not sell or share your personal information with third parties for marketing purposes.</span>

<span className={css.phead}>6. Your Choices:</span>

<span className={css.pcontent}>You can update your communication preferences or request the deletion of your personal information by contacting us at support@batcave.co.in.</span>

<span className={css.phead}>7. Changes to Privacy Policy:</span>

<span className={css.pcontent}>We may update this Privacy Policy to reflect changes in our data practices. The revised policy will be effective from the date posted on our website.</span>

<span className={css.phead}>8. Contact Us:</span>

<span className={css.pcontent}>If you have any questions or concerns about our Privacy Policy or data practices, please contact us at support@batcave.co.in.</span>

  </div>
  </motion.div>}

    </div>
  );
};

export default Register;
