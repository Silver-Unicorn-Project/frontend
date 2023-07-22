import React, {useEffect} from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Swiper } from 'widgets/Swiper';
import {CardItem} from "widgets/CardItem";
import getProductsData from "pages/MainPage/actions";
import {useDispatch} from "shared/lib/customHooks/customHooks";

export const MainPage = () => {
  const dispatch = useDispatch();
console.log("I am here")
  useEffect(()=>{
      dispatch(getProductsData())


  },[])
  return (
    <div className="Main">
      <div className="container">
        <Swiper />
      </div>
      <CardItem/>
    </div>
  );
};
export default MainPage;
