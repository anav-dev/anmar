import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [btnVisibility, setBtnVisibility] = useState(true);
  const [showMsg, setShowMsg] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  {
    /* function to hide button after click and 
    show mesage after button is hidden      */
  }

  function handleClick(e) {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setShowMsg(true);
      setBtnVisibility(false);
    }
  }
  /* to develop the next 2 functions(handleInputChange and validateForm) 
     I got inpiration and guide from my brother                        */

  /*  function to catch all the values inserted in the input section.
      Everything the users types goes into variables.
      These variables will be used later on to do the validation form */
  function handleInputChange(e) {
    const name = e.target.getAttribute("name"); // input -> name
    const setters = {
      //Setters give access to the method that will be called based on the input changed
      name: setName,
      email: setEmail,
      subject: setSubject,
      message: setMsg,
    };
    //to get rid of the error msg when user types something in the input field
    const errorsSetters = {
      name: setNameError,
      email: setEmailError,
      subject: setSubjectError,
      message: setMessageError,
    };

    const setFunction = setters[name];
    setFunction(e.target.value);

    const setError = errorsSetters[name];
    setError("");
  }

  /* function to validate form, making sure the user does not sent an empty form*/
  function validateForm() {
    let isValid = true; //this variable is true by default. Will be false in case of an error
    console.log(name);
    if (!name || name === "") {
      //if no name or name is an empty string
      setNameError("You must type a name here.");
      isValid = false;
    } else {
      setNameError("");
    }
    if (!email || email === "") {
      //if no email or email is an empty string
      setEmailError("You must type an email here.");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!subject || subject === "") {
      //if no subject or subject is an empty string
      setSubjectError("You must type a subject here");
      isValid = false;
    } else {
      setSubjectError("");
    }
    if (!msg || msg === "") {
      //if no msg or msg is an empty string
      setMessageError("You must type a message here");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  }

  return (
    <>
      <div className="form-container">
        <form className="register-form">
          <h2 className="form-title">Contact us</h2>
          <input
            id="name"
            className="form-field"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />

          {nameError && <h4 className="error-msg"> {nameError}</h4>}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {emailError && <h4 className="error-msg"> {emailError}</h4>}
          <input
            id="subject"
            className="form-field"
            type="text"
            placeholder="Book name or Subject"
            name="subject"
            value={subject}
            onChange={handleInputChange}
          />
          {subjectError && <h4 className="error-msg"> {subjectError}</h4>}
          <textarea
            id="message"
            className="form-field"
            type="text"
            placeholder="Message"
            name="message"
            value={msg}
            onChange={handleInputChange}
          />
          {messageError && <h4 className="error-msg"> {messageError}</h4>}

          {btnVisibility && (
            <button
              id="button-form"
              className="button-form"
              type="submit"
              onClick={handleClick}
            >
              Sent
            </button>
          )}
          {/*show h2 message when button is clicked*/}
          {showMsg && (
            <div>
              <h2 className="msg-form-sent">Your form has been sent!</h2>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Form;
