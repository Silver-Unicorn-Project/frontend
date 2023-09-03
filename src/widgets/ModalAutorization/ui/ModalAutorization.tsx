import React, {FC, useState, FormEvent} from 'react';
import {classNames} from 'shared/lib/classNames/ClassNames';
import cls from './ModalAutorization.module.scss';
import {IUser, postApiData, postUser} from "widgets/ModalAutorization/auth-model/AuthSlice";
import {useDispatch} from "shared/lib/customHooks/customHooks";

interface Authorization {
  className?: string;
  tab?: string;
  event?: string;
}

interface UserAuth {
  name: string;
  surname: string;
  telephone: string;
  email: string;
  address: string;
  index: string;
  password: string;
  myCheckbox: boolean;
}

export const Authorization: FC<Authorization> = ({className}) => {
  const dispatch= useDispatch();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [userAuth, setUserAuth] = useState<UserAuth>({
    name: '',
    surname: '',
    telephone: '',
    email: '',
    address: '',
    index: '',
    password: '',
    myCheckbox: false
  });

  const allFieldsFilled = userAuth.name &&
    userAuth.surname &&
    userAuth.telephone &&
    userAuth.email &&
    userAuth.address &&
    userAuth.index &&
    userAuth.password &&
    userAuth.myCheckbox;
  const [email, setEmail] = useState('');

  const handleTabClick = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeTab === 'login') {
      // Login form submission logic
    } else if (activeTab === 'register') {
      const user:IUser = {
        username: userAuth.name,
        email:userAuth.email,
        password:userAuth.password
      };

      dispatch(postApiData(user))
    }
  };
  // TO ADD
  return (
    <div className={classNames(cls.authorizeBox, {}, [className])}>
      <div className={cls.authorizeBoxInner}>
        <div className={cls.authorizeBoxTabBtn}>
          <h2 className={cls.modalTitle}>Создание <br/> аккаунта</h2>
        </div>
        <div className={cls.authorizeBoxTabContent}>
          {activeTab === 'login' ? (
            <div>
              <form onSubmit={handleFormSubmit}>
                <label>
                  <input type="text" name="username"/>
                </label>
                <label>
                  <input type="password" name="password"/>
                </label>
                <button className={cls.submitButton} type="submit">Login</button>
              </form>
              <div>
                <p> Если у вас нету аккаунта вы можете зарегистрироваться <button
                  onClick={() => handleTabClick('register')}>
                  Войти
                </button></p>
              </div>
            </div>
          ) : (
            <div>
              <form onSubmit={handleFormSubmit}>
                <label>
                  <input type="text" name="name" onChange={(e) =>
                    setUserAuth(prevState => ({
                      ...prevState,
                      name: e.target.value
                    }))}/>
                </label>
                <label>
                  <input type="text" name="surname" onChange={(e) =>
                    setUserAuth(prevState => ({
                      ...prevState,
                      surname: e.target.value
                    }))}/>
                </label>
                <label>
                  <input type="tel" id="telephone" name="telephone" placeholder="Enter your phone number"
                         onChange={(e) =>
                           setUserAuth(prevState => ({
                             ...prevState,
                             telephone: e.target.value
                           }))} required/>
                </label>
                <label>
                  <input type="email" name="email" onChange={(e) =>
                    setUserAuth(prevState => ({
                      ...prevState,
                      email: e.target.value
                    }))} placeholder="Insert email"/>
                </label>
                <label>
                  <input type="text" id="address" name="address" placeholder="Enter your address" onChange={(e) =>
                    setUserAuth(prevState => ({
                      ...prevState,
                      address: e.target.value
                    }))} required/>
                </label>
                <label>
                  <input type="text" id="index" name="index" placeholder="Enter your post index" onChange={(e) =>
                    setUserAuth(prevState => ({
                      ...prevState,
                      index: e.target.value
                    }))} required/>
                </label>
                <label>
                  <input type="password" name="password" onChange={(e) =>
                    setUserAuth(prevState => ({
                      ...prevState,
                      password: e.target.value
                    }))} placeholder="Password"/>
                </label>
                <div className={cls.checkboxContainer}>
                  <label htmlFor="myCheckbox">
                    <input type="checkbox" id="myCheckbox"
                           checked={userAuth.myCheckbox} // Reflect the checkbox's state
                           onChange={(e) =>
                             setUserAuth(prevState => ({
                               ...prevState,
                               myCheckbox: e.target.checked
                             }))
                           } />
                    Checkbox Label</label>
                </div>
                <button className={cls.submitButton} type="submit" disabled={!allFieldsFilled}>Register</button>
              </form>
              <div>
                <p> Уже есть аккаунт <button  onClick={() => handleTabClick('login')}>
                  Войти
                </button></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
