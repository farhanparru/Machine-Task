import React from 'react';
import axios from 'axios';
import { useRef, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Userotp = () => {
    const [otp, setOtp] = useState("");
    const fieldsRef = useRef();
    const [state, setState] = useState({
        code1: "",
        code2: "",
        code3: "",
        code4: "",
    });

    const navigate = useNavigate()

    const inputFocus = (e) => {
        const elements = fieldsRef.current.children;
        const dataIndex = +e.target.getAttribute("data-index");
        if (e.key === "Delete" || e.key === "Backspace") {
            const next = dataIndex - 1;
            if (next > -1) {
                elements[next].focus();
            }
        } else {
            const next = dataIndex + 1;
            if (
                next < elements.length &&
                e.target.value !== " " &&
                e.target.value !== "" &&
                e.key.length === 1
            ) {
                elements[next].focus();
            }
        }
    };

    const handleChange = (e, codeNumber) => {
        const value = e.target.value;
        setState({ ...state, [codeNumber]: value });

        const newOtp = { ...state, [codeNumber]: value };
        const otpValue = Object.values(newOtp).join('').slice(0, 4);
        setOtp(otpValue);
    };

    const Loginuser = async (e) => {
        if (Object.values(state).some(value => value === "")) {
            toast.error("All fields are required!");
            setState({
                code1: "",
                code2: "",
                code3: "",
                code4: "",
            });
            setOtp("");
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/api/users/otp', {
                otp: otp
            });
           
           

            toast.success("OTP verified successfully!");

            // Clear the input fields after successful submission
            setState({
                code1: "",
                code2: "",
                code3: "",
                code4: "",
            });
            setOtp("");

            navigate('/sign')
           

        } catch (error) {
          console.log(error);
          if(error.response && error.response.status === 400){
            toast.error('OTP already exists!')
          }else{
            toast.error("OTP verification failed!");
          }
           

            // Clear the input fields after failed submission
            setState({
                code1: "",
                code2: "",
                code3: "",
                code4: "",
            });
            setOtp("");
            return ;
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h5 className="text-xl font-semibold text-gray-700 mb-6">Verification Code</h5>
                <div ref={fieldsRef} className="flex justify-between mb-6">
                    {[1, 2, 3, 4].map((index) => (
                        <input
                            key={index}
                            type="text"
                            data-index={index - 1}
                            placeholder="0"
                            value={state[`code${index}`]}
                            maxLength={1}
                            className="w-16 h-16 text-2xl text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                            onChange={(e) => handleChange(e, `code${index}`)}
                            onKeyUp={inputFocus}
                        />
                    ))}
                </div>
                <button
                    onClick={Loginuser}
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Userotp;
