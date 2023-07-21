import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Swiper } from 'widgets/Swiper';
import {CardItem} from "widgets/CardItem";
export const MainPage = () => {
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
