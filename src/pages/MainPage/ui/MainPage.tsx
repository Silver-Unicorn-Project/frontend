import React from 'react';
import { Swiper } from 'widgets/Swiper';
import {CardItem} from "widgets/CardItem";
import {Counter} from "entities/CounterAsOfExample";


const MainPage = () => {
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
