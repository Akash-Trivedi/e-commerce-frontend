/**
 * author: akash trivedi
 * date created: 15-feb-2022
 * usage: render the form for new customer/publisher
 * caller function: ecommerce-frontend/src/main/components/Header.js
 */

import React from 'react'

function SignupForm() {
    // upon calling the changeDisplay the SignupForm will again re-render,
    // but now with the new contactvalid state as false
    const [contactValid, changeDisplay] = React.useState(true);

    // check the variable scopes for contactValid

    let noAlert = { 'display': 'none' };
    let alert = { 'display': 'inline-block' };

    function sendOtp(contactNumber) {
        // send the otp and then trasfer the view to otp page
    }

    function checkNumber(event) {
        event.preventDefault();//stops the reload
        let phoneNumber = event.target.value.trim();
        phoneNumber.length() === 10 ? sendOtp(phoneNumber) : changeDisplay(false);
    }

    return (
        <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
            <form onSubmit={checkNumber}>
                <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                    <div className="space-y-4">
                        <h1 className="text-center text-2xl font-semibold text-gray-600">Register</h1>
                        <div>
                            <label for="contact" className="block mb-1 text-gray-600 font-semibold">Contact No.</label>
                            <input type="number" name="contact" id="contact" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                        </div>
                        <div style={contactValid ? noAlert : alert}>
                            <span style={{ 'color': 'red' }}>*incorrect number, please try again</span>
                        </div>
                    </div>
                    <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Send OTP</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm;