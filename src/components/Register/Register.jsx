import React, { useState } from 'react'
import css from "./Register.module.css"

import Line4 from "../../assets/Line 4.svg"

const Register = () => {
    const [state,setState]=useState(1)

    // const [selectedGender, setSelectedGender] = useState('');
    // const [selectedCity, setSelectedCity] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        dob: '',
        gender: '',
        city: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      function isFormFilled(formData) {
        // Implement your form validation logic here
        // Check if required fields are not empty, etc.
        const { name, email, /* add more fields */ } = formData;
        return name.trim() !== '' && email.trim() !== '' /* && add more conditions */;
      }
      
      // Usage:
      const formFilled = isFormFilled(formData);
    

    // const handleChangeOne = (event) => {
    //   setSelectedGender(event.target.value);
    // };
    // const handleChangeTwo = (event) => {
    //   setSelectedCity(event.target.value);
    // };
    const sendEmail = (e) => {
        e.preventDefault();
    }
  
  return (
    <div className={css.container}>
        <div className={css.wrap}>
            <div className={css.left}>
                 <div className={css.videobox}>

                 </div>
            </div>

            <div className={css.right}>
                <div className={css.rotate}>
                <div className={css.set}>
                    <span onClick={()=>setState(1)}>Personal Details</span>
                    <div className={css.line}></div>
                </div>
                <div className={css.set}>
                    <span >Car Details</span>
                    <div className={css.line}></div>
                </div>
                </div>

               <div className={css.formdiv}>
                {/* form-1 */}
          {state===1 &&    <form className={css.form1} action=""  onSubmit={sendEmail}>

           <div className={css.inputset}>
            <input name='name'   onChange={handleChange} value={formData.name} className={css.contactinp} type="text" required placeholder='Full Name' />
            <div className={css.inputline}></div>
            </div>
            

            <div className={css.inputset}>
            <input name='email' value={formData.email} onChange={handleChange} className={css.contactinp} type="mail" required placeholder='Email id' />
            <div className={css.inputline}></div>
            </div>

            <div className={css.inputset}>
            <input name='number' value={formData.number} className={css.contactinp} type="number" placeholder='mobile number' />
            <div className={css.inputline}></div>
            </div>

            <div className={css.inputset}>
            <input name='address' value={formData.address} className={css.contactinp} type="text" placeholder='residential address' />
            <div className={css.inputline}></div>
            </div>

            <div className={css.inputset}>
            <input name='dob' value={formData.dob} className={css.contactinp} type="text" placeholder='date of birth' />
            <div className={css.inputline}></div>
            </div>


            <div className={css.inputset}>
            <select name="gender" value={formData.gender} onChange={handleChange} className={css.contactinp}  id=""  placeholder='City'>
  <option  className={css.opt} value ="" disabled> Gender?</option>     
  <option className={css.opt} value="MALE">Male</option>
  <option className={css.opt} value="FEMALE">female</option> 
  <option className={css.opt} value="OTHER">other</option>
            </select>
            <div className={css.inputline}></div>
            </div>


            <div className={css.inputset}>
            <select name='city' value={formData.city} onChange={handleChange} className={css.contactinp}  id=""  >
            <option className={css.opt} value ="" disabled> city</option>

  <option className={css.opt} value="Bengaluru">Bengaluru</option>
  <option className={css.opt} value="Chennai">Chennai</option>
  <option className={css.opt} value="Coimbatore">Coimbatore</option>
  <option className={css.opt} value="Hyderabad">Hyderabad</option>
  <option className={css.opt} value="Kochi">Kochi</option>
  <option className={css.opt} value="Mysore">Mysore</option>
  <option className={css.opt} value="Thiruvananthapuram">Thiruvananthapuram</option>
  <option className={css.opt} value="Visakhapatanam">Visakhapatanam</option>

            </select>
            <div className={css.inputline}></div>
            </div>

            <button type='submit' onClick={()=> formFilled?   setState(2) :""} className={css.proceedbtn}>PROCEED</button>

          

            




                </form> }

          {state===2 &&   <form className={css.form2} action="">

               </form> }
               </div>

            </div>

        </div>
      
    </div>
  )
}

export default Register
