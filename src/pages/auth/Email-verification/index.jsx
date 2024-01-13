import React, { useState } from 'react';
import "./style.css";
import { confirmSignUp } from 'aws-amplify/auth';


export function EmailVerification({ userEmail }) {
  const [otpInputs, setOtpInputs] = useState(['', '', '', '', '', '']);
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleOtpInputChange = (index, value) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;
    setOtpInputs(newOtpInputs);

    console.log(`Current Index: ${index}, Value Entered: ${value}`);

    if (value.match(/^\d$/) && index < otpInputs.length - 1) {
        const nextInputID = `input-${index + 1}`;
        console.log(`Next Input ID: ${nextInputID}`);

        const nextInput = document.getElementById(nextInputID);
        if (nextInput) {
            nextInput.focus();
        } else {
            console.log('Next input not found');
        }
    }
  };

  const handleVerify = async () => {
    const verificationCode = otpInputs.join('');

    try {
        const { isSignUpComplete, nextStep } = await confirmSignUp({
            username: userEmail, // userEmail is used as the username
            confirmationCode: verificationCode
        });

        if (isSignUpComplete) {
            setVerificationStatus('Email successfully verified');
        } else {
            console.log('Next step:', nextStep);
        }
    } catch (error) {
        console.error('Error confirming sign up:', error);
        setVerificationStatus('Verification failed. Please check the code and try again.');
    }
  };

  

  return (
    <div className="container height-100 d-flex justify-content-center align-items-center">
      <div className="position-relative">
        <div className=" p-2 text-center">
          <h6>Please enter the one-time password <br/> to verify your account</h6>
          <div>  <span>A code has been sent to </span>
        <small>{userEmail}</small></div>

          <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
            {otpInputs.map((value, index) => (
              <input
                key={index}
                className="m-2 text-center form-control rounded"
                type="text"
                maxLength="1"
                id={`input-${index}`}
                value={value}
                onChange={(e) => handleOtpInputChange(index, e.target.value)}
              />
            ))}
          </div>

          <div className="mt-4">
            <button className="btn btn-danger px-4 validate" onClick={handleVerify}>
              Validate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
