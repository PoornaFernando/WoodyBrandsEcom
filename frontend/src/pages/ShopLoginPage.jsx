import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ShopLogin from "../components/Shop/ShopLogin";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller,isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/dashboard`);
    }
  }, [navigate, isLoading,isSeller])
  return (
    <div>
      <Link to = "/"> 
          <Button variant="outlined" startIcon={<BiArrowBack />}>
            BACK TO HOME
          </Button>
        </Link>
        <ShopLogin />
    </div>
  )
}

export default ShopLoginPage