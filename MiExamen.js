document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-box');
    const inputs = document.querySelectorAll('input, textarea');
    const floatingMessage = document.querySelector('.floating-message');

    if (form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene que la página se recargue

        let allFieldsFilled = true;

        // Limpia cualquier clase de error previa y verifica los campos
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFieldsFilled = false;
                input.classList.add('error-field'); // Añade clase para resaltar campos vacíos
            } else {
                input.classList.remove('error-field'); // Remueve la clase si el campo está lleno
            }
        });

        if (allFieldsFilled) {
            // Muestra el mensaje flotante
            if (floatingMessage) {
                floatingMessage.classList.add('show');
                // Oculta el mensaje después de 3 segundos
                setTimeout(() => {
                    floatingMessage.classList.remove('show');
                }, 3000);
            }
        }
        });
    }
});