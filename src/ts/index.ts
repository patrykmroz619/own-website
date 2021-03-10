window.addEventListener('DOMContentLoaded', () => {
    import('./background').then((background) => {
        background.start();
    });
});
