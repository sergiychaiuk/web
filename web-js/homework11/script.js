(() => {
    const buttons = document.getElementsByClassName('btn');

    document.addEventListener('keydown', event => {
        const key = event.key.toUpperCase();

        for (const button of buttons) {
            button.classList.remove('btn-blue');
        }

        const button = document.querySelector(`[data-key="${key}"]`);
        if (button) {
            button.classList.add('btn-blue');
        }
    });
})();