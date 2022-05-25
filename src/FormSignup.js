import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
      <h1>Create an Account</h1>
     
     <div className="form-inputs">
     
         <label htmlFor="email" className="form-label">
         Your email address
         </label>
         <input type="email" name="email" className="form-input"
         value = {values.email}
         onChange = {handleChange}
          />
         {errors.email && <p>{errors.email}</p>}
      </div>
         
         <div className="form-inputs">
         <label htmlFor="password" className="form-label">
          Password
         </label>
         <input id="password"  type="password" name="password" className="form-input"
          value = {values.password}
         onChange = {handleChange} />
          {errors.password && <p>{errors.password}</p>}
         </div>
         
           <div className="form-inputs">
         <label htmlFor="password2" className="form-label">
         Confirm Password
         </label>
         <input id="password2" 
         type="password" name="password2" className="form-input"
         value = {values.password2}
         onChange = {handleChange} />
          {errors.password2 && <p>{errors.password2}</p>}
         </div>
         
           <div className="form-inputs">
          <label htmlFor="username" className="form-label">
         Your full name
         </label>
         <input id="username" type="text" name="username" className="form-input" 
         value = {values.username}
         onChange = {handleChange}/>
            {errors.username && <p>{errors.username}</p>}
         </div>
         
           <div className="form-inputs">
         <label htmlFor="phoneNo" className="form-label">
         Your phone number
         </label>
         <input id="phoneNo" type="number" name="phoneNo" className="form-input" 
         value = {values.phoneNo}
         onChange = {handleChange} />
                     {errors.phoneNo && <p>{errors.phoneNo}</p>}

         </div>
        
           <div className="form-inputs">
         <input type="checkbox" id="agree" name="agree"
         value = {values.agree}
         onChange = {handleChange} />
          <label htmlFor="agree" > I read and agree <b>terms and conditions</b></label>
          {errors.agree && <p>{errors.agree}</p>}
     </div>
       
        <button className='form-input-btn' type='submit'>
          Create Account
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;