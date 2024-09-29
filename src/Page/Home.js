import { Footer } from '../Layout/Footer';
import { Header } from '../Layout/Header';
import { Posts } from '../Layout/Posts';
import { Routes } from '../Router/Routes';
import { changeVisibilityBasedOnLoginStatus, setLogoutButtonTappedEvent } from '../Util/uiControl';
import { setNavElemTapped } from '../Util/util';

export const Home = () => {
    document.querySelector('#root').innerHTML = `
  <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${Header()}
        ${Routes()}
        ${Posts()}
        ${Footer()}
      </div>
    </div>
  `;

    const loginButton = document.getElementById('login');
    const logoutButton = document.getElementById('logout');
    const profileButton = document.getElementById('profile');
    const isUserLogin = window.localStorage.getItem('user') !== null;

    changeVisibilityBasedOnLoginStatus(isUserLogin, loginButton, logoutButton, profileButton);
    setLogoutButtonTappedEvent(loginButton, logoutButton, profileButton);
    setNavElemTapped();
};
