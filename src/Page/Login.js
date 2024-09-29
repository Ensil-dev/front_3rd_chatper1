import { goTo } from '../Util/util';

export const Login = () => {
    document.querySelector('#root').innerHTML = `
      <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
          <form id="login-form">
            <div class="mb-4">
              <input id="username" type="text" placeholder="이메일 또는 전화번호" class="username w-full p-2 border rounded">
            </div>
            <div class="mb-6">
              <input id="pw" type="password" autocomplete="cc-number" placeholder="비밀번호" class="w-full p-2 border rounded">
            </div>
            <button type="submit" id="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
          </form>
          <div class="mt-4 text-center">
            <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
          </div>
          <hr class="my-6">
          <div class="text-center">
            <button id="signup" class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
          </div>
          <div id="error-message"></div>
        </div>
      </main>
  `;

    const checkLoginUserAccessToLoginPage = () => {
        const isUserLogin = window.localStorage.getItem('user') !== null;

        if (isUserLogin) {
            goTo('/');
        }
    };

    checkLoginUserAccessToLoginPage();

    const userNameInput = document.querySelector('#username')

    const setLoginSubmitButtonTappedEvent = () => {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const user = {
                    username: userNameInput.value,
                    email: '',
                    bio: '',
                };

                try {
                    localStorage.setItem('user', JSON.stringify(user));
                    goTo('/');
                } catch (error) {
                    if (error instanceof FormValidationError) {
                        document.getElementById(`${error.field}-error`).textContent = error.message;
                    } else {
                        console.error('An unexpected error occurred:', error);
                    }
                }
            });
        }
    };

    setLoginSubmitButtonTappedEvent();

    const setLoginErrorCatching = () => {
        window.addEventListener('error', (event) => {
            event.preventDefault();
            if (window.location.pathname === '/login') {
                handleError(event.error);
            }
        });
    };

    const handleError = (error) => {
        const errorDiv = document.getElementById('error-message');
        errorDiv.innerHTML = `
        <aside class="w-full p-8">
          <h2 class="text-red-600 text-center">오류 발생!</h2>
          <p class="text-center">${error.message}</p>
        </aside>
      `;
    };

    setLoginErrorCatching();
};
