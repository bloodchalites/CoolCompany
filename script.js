function validateForm() {
    // Получение значений полей
    const productName = document.getElementById('productName').value.trim();
    const quantity = parseInt(document.getElementById('quantity').value.trim());
    const email = document.getElementById('email').value.trim();
    const delivery = document.getElementById('delivery').value.trim();
    let isValid = true;

    // Очистка предыдущих ошибок
    document.getElementById('productNameError').textContent = '';
    document.getElementById('quantityError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('deliveryError').textContent = '';

    // Проверка, Вывод ошибок
    if (!productName) {
        document.getElementById('productNameError').textContent = 'Название продукта обязательно';
        isValid = false;
    }
    if (!quantity || quantity <= 0) {
        document.getElementById('quantityError').textContent = 'Введите положительное число';
        isValid = false;
    }
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Введите корректный email';
        isValid = false;
    }
    if (!delivery) {
        document.getElementById('deliveryError').textContent = 'Выберите способ доставки';
        isValid = false;
    }

    // Если форма валидна
    if (isValid) {
        document.getElementById('output').textContent = `Заказ на "${productName}" успешно оформлен!`;
        // Выводим данные через alert
        alert(`Данные заказа:\nПродукт: ${productName}\nКоличество: ${quantity}\nEmail: ${email}\nСпособ доставки: ${delivery}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    function CallForm() {
        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");
        const questionInput = document.getElementById("question");

        let isValid = true;

        // Удаление всех ранее добавленных сообщений об ошибках
        document.querySelectorAll(".error").forEach(error => error.remove());
        
        // Проверка, Вывод ошибок
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Пожалуйста, введите ваше имя");
            isValid = false;
        }

        if (!validatePhone(phoneInput.value)) {
            showError(phoneInput, "Пожалуйста, введите корректный телефон");
            isValid = false;
        }

        if (questionInput.value.trim() === "") {
            showError(questionInput, "Пожалуйста, укажите тему, которая вас интересует");
            isValid = false;
        }

        if (isValid) {
            alert("Форма успешно отправлена!");
        }
    }
    
    // смена цвета ошибки на голубой
    function showError(input, message) {
        const error = document.createElement("div");
        error.className = "error";
        error.style.color = "blue";
        error.style.fontSize = "12px";
        error.textContent = message;
        input.parentElement.appendChild(error);
    }
    
    function validatePhone(phone) {
        const phonePattern = /^\+?[0-9]{10,15}$/;
        return phonePattern.test(phone);
    }

    // Делаем функцию глобальной
    window.CallForm = CallForm;
    
});

// Функция для изменения цвета заголовка при клике
const titleElement = document.querySelector(".offer__title");
const colors = ["blue", "white", "red"]; // Массив цветов
let currentColorIndex = 0;

titleElement.addEventListener("click", () => {
    // Увеличиваем индекс цвета, сбрасываем к нулю, если конец массива
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    titleElement.style.color = colors[currentColorIndex];
});