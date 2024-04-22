let colorActual = 'Light'; // Color inicial

export const ToggleColor =() => {
    if (colorActual === 'Light') {
        document.body.style.backgroundColor = 'Dark';
        colorActual = 'Dark';
    } else {
        document.body.style.backgroundColor = 'Light';
        colorActual = 'Light';
    }
}