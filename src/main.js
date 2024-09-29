import { Home } from './Page/Home';
import { Login } from './Page/Login';
import { NotFound } from './Page/NotFound';
import { Profile } from './Page/Profile';
import { Router } from './Router/Router';

window.addEventListener('error', (event) => {
    if (event.error.message === '404-not-found') {
        NotFound();
    }
});

const router = new Router();

router.addRoute('/', Home);
router.addRoute('/profile', Profile);
router.addRoute('/login', Login);
router.init();