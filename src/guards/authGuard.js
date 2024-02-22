// AuthGuard.js

export default function authGuard(to, from, next) {

    const token = localStorage.getItem('access_token');
    if (token) {
        debugger;
        // Se l'utente è autenticato, consenti la navigazione
        next();
    } else {
        debugger;
        // Se l'utente non è autenticato, reindirizzalo alla pagina di login
        next('/login');
    }
}
