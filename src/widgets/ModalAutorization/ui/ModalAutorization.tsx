import React, { FC, useState, FormEvent } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './ModalAutorization.module.scss';

interface Autorization {
  className?: string;
  tab?: string;
  event?: string;
}

export const Autorization: FC<Autorization> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleTabClick = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeTab === 'login') {
      // Login form submission logic
    } else if (activeTab === 'register') {
      // Register form submission logic
    }
  };

  return (
    <div className={classNames(cls.authorizeBox, {}, [className])}>
      <div className={cls.authorizeBoxInner}>
        <div className={cls.authorizeBoxTabBtn}>
          <button onClick={() => handleTabClick('login')} className={activeTab === 'login' ? 'active' : ''}>
            Login
          </button>
          <button onClick={() => handleTabClick('register')} className={activeTab === 'register' ? 'active' : ''}>
            Register
          </button>
        </div>
        <div className={cls.authorizeBoxTabContent}>
          {activeTab === 'login' ? (
            <form onSubmit={handleFormSubmit}>
              <label>
                <span>Username:</span> 
                <input type="text" name="username" />
              </label>
              <label>
                <span>Password:</span>
                <input type="password" name="password" />
              </label>
              <button type="submit">Login</button>
            </form>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <label>
                <span>Username:</span>
                <input type="text" name="username" />
              </label>
              <label>
                <span>Password:</span>
                <input type="password" name="password" />
              </label>
              <label>
                <span>Confirm Password:</span>
                <input type="password" name="confirmPassword" />
              </label>
              <button type="submit">Register</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
