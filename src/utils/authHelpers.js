export function userHasToken() {
    return localStorage.getItem("token");
}

export function tokenHasExpired() {
    if (window.TIMEOUT) {
        const timeoutInterval = window.TIMEOUT * 60 * 1000;

        // check if the token is expired
    }

}