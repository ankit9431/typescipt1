import React, { useState } from 'react';
import TextInput from './TextInput';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Signup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [confirmEmail, setConfirmEmail] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const navigate=useNavigate()

    const sign=async()=>{
        if(email!==confirmEmail){
            alert('email must be same')
            return
        }
        try{
            const config={
                headers:{
                    "Content-type":"application/json",
                },
            };
            const {data}=await axios.post('http://localhost:5002/api/user',{
                userName,
                email,
                password,
                firstName,
                lastName
            },config,);
            console.log(data);
            
            alert('success')
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate('/home')

        }catch{error:alert('error')}
    }

    return (
        <div className='main1'>
          <div className='main2'>
           <div className='sign'>Signup free to start listening</div>
            <div className='main3'>
            <TextInput
                label="Email address"
                placeholder="Email Id or userName"
                className='my-6'
                value={email}
                setValue={setEmail}
            />
            <TextInput
                label="Confirm Email address"
                placeholder="Confirm Email address"
                className='mb-6'
                value={confirmEmail}
                setValue={setConfirmEmail}
            />
            <TextInput
                label="Create Password"
                placeholder="Create Password"
                className='mb-6'
                value={password}
                setValue={setPassword}
            />
            <TextInput
                label="userName"
                placeholder="userName"
                className='mb-6'
                value={userName}
                setValue={setUserName}
            />
            
                <TextInput
                    label="First Name"
                    placeholder="Enter Your First Name"
                    className='my-6'
                    value={firstName}
                    setValue={setFirstName}
                />
                <TextInput
                    label="Last Name"
                    placeholder="Enter Your Last Name"
                    className='my-6'
                    value={lastName}
                    setValue={setLastName}
                />
            </div>
            <div>
                <button onClick={sign}>SIGN UP</button>
            </div>
            <div>Already have an account</div>
          </div> 
        </div>
    );
};

export default Signup;
