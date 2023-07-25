import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ShopCreate from "../components/Shop/ShopCreate";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller,seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
    }
  }, [navigate, isSeller, seller])
  return (
    <div>
      <Link to = "/"> 
          <Button variant="outlined" startIcon={<BiArrowBack />}>
            BACK TO HOME
          </Button>
        </Link>
        <ShopCreate />
    </div>
  )
}

export default ShopCreatePage