export default function validateInfo(values) {
    let errors = {};
  
    
    
    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
      }
    
      if (!values.password2) {
        errors.password2 = 'Password is required';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
      }
  
      if (!values.username.trim()) {
          errors.username = 'Username required';
        }
        if (!values.phoneNo) {
          errors.phoneNo = 'Phone number required';
        }
          else if(values.phoneNo.length !== 10)
          {
              errors.phoneNo = 'Phone number must be of 10 digit';
          }
      if(!document.getElementById("agree").checked)
      {
        errors.agree="Please accepts terms and conditions";
        
      }
    return errors;
  }