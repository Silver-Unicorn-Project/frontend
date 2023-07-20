import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Swiper } from 'widgets/Swiper';
export const MainPage = () => {
  return (
    <div className="Main">
      <div className="container">
        <Swiper />
      </div>
    </div>
  );
};
export default MainPage;
