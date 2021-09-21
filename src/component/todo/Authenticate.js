class Authenticate {
    loginSuccessful(username, password) {

        sessionStorage.setItem('authenticatedUser', username);
    }
    Logout() {
        sessionStorage.removeItem('authenticatedUser')

    }
    isUserLogin() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user == null) {
            return false;
        } else {
            return true;
        }
    }
    getLogin() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) {
            return '';
        } else {
            return user;
        }
    }
}
export default new Authenticate();