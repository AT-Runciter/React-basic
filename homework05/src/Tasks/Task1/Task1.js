import React, { useState, useRef } from 'react';

function Form() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  function handleInputChange() {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;

    setFormData({ firstName: firstName, lastName: lastName, email: email });
  }

  return (
    <div>
      <input type="text" ref={firstNameRef} placeholder="First Name" />
      <input type="text" ref={lastNameRef} placeholder="Last Name" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button onClick={handleInputChange}>Submit</button>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default Form;
