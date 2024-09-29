export const Routes = () => {
    return `
        <nav class="bg-white shadow-md p-2 sticky top-14">
          <ul class="flex justify-around">
            <li><a href="/" class="text-blue-600 font-bold">홈</a></li>
            <li><a id="profile" href="/profile" class="hidden text-gray-600">프로필</a></li>
            <li>
              <a id="login"  href="/login" class="text-gray-600">로그인</a>
              <button id="logout" class="hidden text-gray-600">로그아웃</button>
            </li>
          </ul>
        </nav>
`;
};