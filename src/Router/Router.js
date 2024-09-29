export class Router {
    constructor() {
        this.routes = {};
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }

    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    navigateTo(path) {
        history.pushState(null, '', path);
        this.handleRoute(path);
    }

    handlePopState() {
        this.handleRoute(window.location.pathname);
    }

    handleRoute(path) {
        const handler = this.routes[path];
        if (handler) {
            handler();
        } else {
            throw new Error('404-not-found')
        }
    }

    init() {
        window.addEventListener('hashchange', () => {
            this.handleRoute(path);
        });

        this.handleRoute(window.location.pathname || '/');
    }
}
