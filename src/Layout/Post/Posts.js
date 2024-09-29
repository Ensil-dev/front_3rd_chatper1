import { getPostData } from '../../Mock/getPostData';
import { NewPostForm } from './NewPostForm';
import { Post } from './Post';

export const Posts = () => {
    const postData = getPostData();

    return `
        <main class="p-4">
            ${NewPostForm()}
            <div class="space-y-4">
                ${postData.map((post) => Post(post)).join('')}
            </div>
        </main>
  `;
};
