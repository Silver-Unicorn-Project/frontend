import React, { FC, useState, FormEvent, FocusEvent, ChangeEvent } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './ModalAutorization.module.scss';
import { IUser, postApiData, postUser } from 'widgets/ModalAutorization/auth-model/AuthSlice';
import { useDispatch } from 'shared/lib/customHooks/customHooks';

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

interface UserLogin {
  username: string;
  password: string;
  isSave: boolean;
}

export const Authorization: FC<Authorization> = ({ className }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [userAuth, setUserAuth] = useState<UserAuth>({
    name: '',
    surname: '',
    telephone: '',
    email: '',
    address: '',
    index: '',
    password: '',
    myCheckbox: false,
  });
  const [userLogin, setUserLogin] = useState<UserLogin>({
    username: '',
    password: '',
    isSave: false,
  });

  const allFieldsFilled =
    userAuth.name &&
    userAuth.surname &&
    userAuth.telephone &&
    userAuth.email &&
    userAuth.address &&
    userAuth.index &&
    userAuth.password &&
    userAuth.myCheckbox;
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleTabClick = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const input = event.target;
    const name = input.dataset.placeholder;
    input.placeholder = name;
  };

  const handleFocusOut = (event: FocusEvent<HTMLInputElement>) => {
    const input = event.target;
    input.placeholder = '';
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const name = target.name;
    const type = target.type;
    // const value = target.value || target.checked;
    const value = type === 'checkbox' ? target.checked : target.value;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setIsValid(target.closest('form').checkValidity());
    console.log('check=>', userLogin.isSave);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (activeTab === 'login') {
      const dataLogin: UserLogin = {
        username: userLogin.username,
        password: userLogin.password,
        isSave: userLogin.isSave,
      };
      console.log('dataLogin', dataLogin);
    } else if (activeTab === 'register') {
      const user: IUser = {
        username: userAuth.name,
        email: userAuth.email,
        password: userAuth.password,
      };

      dispatch(postApiData(user));
    }
  };
  // TO ADD
  return (
    <div className={classNames(cls.authorizeBox, {}, [className])}>
      <div className={cls.authorizeBoxInner}>
        <div className={cls.authorizeBoxTabBtn}>
          <h2 className={cls.modalTitle}>Вход в аккаунт</h2>
        </div>
        <div className={cls.authorizeBoxTabContent}>
          {activeTab === 'login' ? (
            <div className={cls.authWrapper}>
              <form onSubmit={handleFormSubmit}>
                <label>
                  Email
                  <input
                    type="email"
                    name="username"
                    data-placeholder="Например, 12345@mail.ru"
                    onFocus={handleFocus}
                    onBlur={handleFocusOut}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Пароль
                  <input
                    type="password"
                    name="password"
                    data-placeholder="Пароль от 2 до 20 символов"
                    onFocus={handleFocus}
                    onBlur={handleFocusOut}
                    onChange={handleChange}
                    required
                  />
                </label>
                <div className={cls.checkboxWrapper}>
                  <div className={cls.checkboxContainer}>
                    <label htmlFor="checkboxAuth">
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="checkboxAuth"
                        name="isSave"
                        onChange={handleChange}
                      />
                      <span className={cls.visibleCheckbox}></span>
                      <p className={cls.textCheckbox}>Запомнить данные</p>
                    </label>
                  </div>
                  <button type="button" className={cls.resetButton}>
                    Не помню пароль
                  </button>
                </div>

                <button className={cls.submitButton} type="submit" disabled={!isValid}>
                  Войти
                </button>
              </form>
              <div className={cls.linkContainer}>
                <p className={cls.authText}>У вас нет аккаунта? </p>
                <button className={cls.authLink} onClick={() => handleTabClick('register')}>
                  Зарегистрироваться
                </button>
              </div>
            </div>
          ) : (
            <div>
              <form onSubmit={handleFormSubmit}>
                <label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) =>
                      setUserAuth((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="surname"
                    onChange={(e) =>
                      setUserAuth((prevState) => ({
                        ...prevState,
                        surname: e.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    placeholder="Enter your phone number"
                    onChange={(e) =>
                      setUserAuth((prevState) => ({
                        ...prevState,
                        telephone: e.target.value,
                      }))
                    }
                    required
                  />
                </label>
                <label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) =>
                      setUserAuth((prevState) => ({
                        ...prevState,
                        email: e.target.value,
                      }))
                    }
                    placeholder="Insert email"
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    onChange={(e) =>
                      setUserAuth((prevState) => ({
                        ...prevState,
                        address: e.target.value,
                      }))
                    }
                    required
                  />
                </label>
                <label>
                  <input
                    type="text"
                    id="index"
                    name="index"
                    placeholder="Enter your post index"
                    onChange={(e) =>
                      setUserAuth((prevState) => ({
                        ...prevState,
                        index: e.target.value,
                      }))
                    }
                    required
                  />
                </label>
                <label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) =>
                      setUserAuth((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                      }))
                    }
                    placeholder="Password"
                  />
                </label>
                <div className={cls.checkboxContainer}>
                  <label htmlFor="myCheckbox">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      checked={userAuth.myCheckbox} // Reflect the checkbox's state
                      onChange={(e) =>
                        setUserAuth((prevState) => ({
                          ...prevState,
                          myCheckbox: e.target.checked,
                        }))
                      }
                    />
                    <span className={cls.visibleCheckbox}></span>
                    <p className={cls.textCheckbox}>Запомнить данные</p>
                  </label>
                </div>
                <button className={cls.submitButton} type="submit" disabled={!allFieldsFilled}>
                  Register
                </button>
              </form>
              <div>
                <p>
                  {' '}
                  Уже есть аккаунт <button onClick={() => handleTabClick('login')}>Войти</button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
