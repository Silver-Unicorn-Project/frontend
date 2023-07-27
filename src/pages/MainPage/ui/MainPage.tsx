import React, {useEffect, useState} from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Swiper } from 'widgets/Swiper';
import {CardItem} from "widgets/CardItem";
import getProductsData from "pages/MainPage/actions";
import {useDispatch, useSelector} from "shared/lib/customHooks/customHooks";
import { RootState } from 'index';

const MainPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading]= useState(true);
  
  const itemsData =  useSelector((state:RootState) => state.todos.items)
console.log("I am here")
  useEffect(()=>{
      dispatch(getProductsData())
      setLoading(false)
    
  },[])

  if(loading === false){
    console.log(itemsData)
  }
  return (

    <div className="Main">
      <div className="container">
        <Swiper />
      </div>
      <CardItem/>
     
      <CardItem/>
    </div>
  );
};
export default MainPage;
