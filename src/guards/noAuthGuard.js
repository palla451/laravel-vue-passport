// AuthGuard.js

export default function noAuthGuard(to, from, next) {

    const token = localStorage.getItem('token');
    if (!token) {
        // Se l'utente è autenticato, consenti la navigazione
        next();
    } else {
        // Se l'utente non è autenticato, reindirizzalo alla pagina di login
        next('/dashboard');
    }
}
