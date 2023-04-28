import React, { useState } from 'react';
import "./Banner.css"
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Banner = ({history}) => {
  const [email, setEmail] = useState('demo@gmail.com');
    const [password, setPassword] = useState('12345');
    // const navigate = useNavigate();

    const loginHandler = (value) => {
      if(email || password){
       console.log('Login Successful')
       //navigate("/home");
      }
    
  };
  
  return (
    <div className='banners'>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="mx-10 w-[80%] my-2 px-3 text-black py-2 rounded bg-[#E8F0FE]"
            placeholder="Email"
            value={email}
            // value="kayes.ek8@gmail.com"
            type="text"
            name=""
            id=""
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="mx-10 w-[80%] my-2 px-3 text-black py-2 rounded bg-[#E8F0FE]"
            placeholder="Password"
            value={password}
            // value="kayes"
            type="password"
            name=""
            id=""
          />
          
          <button
            type="submit"
            onClick={loginHandler}
            className="button mx-10  w-[75%]  mt-8 py-2 rounded bg-[#EEEEEE] text-[#0073B7] hover:text-white"
          >
            Login
          </button>

        </Box>
    </div>
  )
}

export default Banner;
