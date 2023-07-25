import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from "../components/Login/Login";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { BiArrowBack } from 'react-icons/bi';


const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
    }
  }, [navigate, isAuthenticated])
  
  return (
    <div>
        <Link to = "/"> 
          <Button variant="outlined" startIcon={<BiArrowBack />}>
            BACK TO HOME
          </Button>
        </Link>
        <Login />
    </div>
  )
}

export default LoginPage;