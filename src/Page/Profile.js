import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';
import { Routes } from '../Router/Routes';
import { setLogoutButtonTappedEvent } from '../Util/uiControl';
import { goTo, setNavElemTapped } from '../Util/util';

export const Profile = () => {
    document.querySelector('#root').innerHTML = `
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${Header()}
      ${Routes()}

      <main class="p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
          <form id="profile-form">
            <div class="mb-4">
              <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
              <input type="text" id="username" name="username" value="홍길동" class="w-full p-2 border rounded">
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
              <input type="email" id="email" name="email" value="hong@example.com" class="w-full p-2 border rounded">
            </div>
            <div class="mb-6">
              <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
              <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다.</textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
          </form>
        </div>
      </main>
      ${Footer()}
    </div>
  </div>
  `;

    setNavElemTapped();

    const loginButton = document.getElementById('login');
    const logoutButton = document.getElementById('logout');
    const profileButton = document.getElementById('profile');

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const bioInput = document.getElementById('bio');
    const profileUpdateForm = document.getElementById('profile-form');
    const isUserLoginInfo = window.localStorage.getItem('user');

    const setProfileUpdateButtonTappedEvent = () => {
        profileUpdateForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const newProfileInfo = {
                username: usernameInput.value,
                email: emailInput.value,
                bio: bioInput.value,
            };

            window.localStorage.setItem('user', JSON.stringify(newProfileInfo));
        });
    };

    setProfileUpdateButtonTappedEvent();

    if (isUserLoginInfo) {
        loginButton.classList.add('hidden');
        profileButton.classList.remove('hidden');
        logoutButton.classList.remove('hidden');
    } else {
        goTo('/');
    }

    if (isUserLoginInfo) {
        const userInfo = JSON.parse(isUserLoginInfo);

        usernameInput.value = userInfo.username;
        emailInput.value = userInfo.email;
        bioInput.value = userInfo.bio;
    }

    // 로그아웃 버튼 클릭 처리
    setLogoutButtonTappedEvent(loginButton, logoutButton, profileButton, isUserLoginInfo !== null);
};
