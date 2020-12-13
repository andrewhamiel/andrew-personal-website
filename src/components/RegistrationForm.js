import React, {useState} from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { useHistory } from "react-router-dom";

function RegistrationForm(props) {

  const history = useHistory();

  const [state , setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email : "",
    password : "",
    confirmPassword: "",
    successMessage: null
})

  const handleChange = (e) => {
    const {id , value} = e.target
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}

  const handleSubmitClick = (e) => {
        e.preventDefault();
        if(isValidFormData()) {
            sendDetailsToServer()

        } else {

          props.showError('Invalid Form Data');
        }
    }

    const redirectToHome = () => {
        history.push('/');
    }

  const handleSaveToCsvFile = (jsonData,filename) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], {type: "text/json"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = process.env.PUBLIC_URL + `${filename}.csv`;
    link.href = process.env.PUBLIC_URL + url;
    link.click();
}

    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            //props.showError(null);
            const payload={
                "firstName": state.firstName,
                "lastName": state.lastName,
                "phoneNumber": state.phoneNumber,
                "email":state.email,
                "password":state.password,

            }
            handleSaveToCsvFile(payload, "localData");
            setState(prevState => ({
              ...prevState,
              'successMessage' : 'Registration successful. Redirecting to home page..'
            }))


          } else {
            props.showError('Please enter valid username and password')
        }

    }

    const isValidFormData = () =>
    {
    if (state.password == state.confirmPassword){
        return (true);
      }
    return (false);
}

  return(
        <div className="card col-12 col-lg-9 login-card mt-2 hv-center ">
            <form>
              <div className="form-group text-left">
              <label htmlFor="exampleFirstName">First name</label>
              <input type="firstName"
                     className="form-control"
                     id="firstName"
                     placeholder="Enter first name"
                     onChange={handleChange}
              />
              </div>
              <div className="form-group text-left">
              <label htmlFor="exampleLastName">Last name</label>
              <input type="lastName"
                     className="form-control"
                     id="lastName"
                     placeholder="Enter last name"
                     onChange={handleChange}
              />
              </div>
              <div className="form-group text-left">
              <label htmlFor="examplePhoneNumber">Phone number</label>
              <input type="phoneNumber"
                     className="form-control"
                     id="phoneNumber"
                     aria-describedby="phoneHelp"
                     placeholder="Enter phone number"
                     onChange={handleChange}
              />
              <small id="phoneHelp" className="form-text text-muted">Phone number should be in xxx-xxx-xxxx format.</small>
              </div>
              <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email"
                     className="form-control"
                     id="email"
                     aria-describedby="emailHelp"
                     placeholder="Enter email"
                     value={state.email}
                     onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit"className="btn btn-primary" onClick={handleSubmitClick}>Register</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
        </div>
    )
}
export default RegistrationForm;
