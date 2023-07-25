import React from 'react';
import SignUp from "../components/Signup/Signup";
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { Button } from '@mui/material';

const SignUpPage = () => {
  return (
    <div>
      <Link to = "/"> 
          <Button variant="outlined" startIcon={<BiArrowBack />} activeHeading={1}>
            BACK TO HOME
          </Button>
        </Link>
      <SignUp />
    </div>
  )
}

export default SignUpPage
