// Função para converter Fahrenheit para Celsius
function convertToCelsius() {
    const input = document.getElementById('temperatureInput').value;
    const fahrenheit = Number(input);
    
    if (isNaN(fahrenheit)) {
        showError();
        return;
    }
    
    const celsius = (fahrenheit - 32) * 5 / 9;
    showResult(`${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`);
}

// Função para converter Celsius para Fahrenheit
function convertToFahrenheit() {
    const input = document.getElementById('temperatureInput').value;
    const celsius = Number(input);
    
    if (isNaN(celsius)) {
        showError();
        return;
    }
    
    const fahrenheit = (celsius * 9 / 5) + 32;
    showResult(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`);
}

// Função para mostrar o resultado da conversão
function showResult(message) {
    document.getElementById('result').innerText = message;
    
    // Reseta o input e o resultado após 5 segundos
    setTimeout(resetFields, 5000);
}

// Função para mostrar uma mensagem de erro
function showError() {
    document.getElementById('result').innerText = 'Por favor, insira um número válido.';
    
    // Reseta o input e o resultado após 3 segundos
    setTimeout(resetFields, 3000);
}

// Função para resetar os campos
function resetFields() {
    document.getElementById('temperatureInput').value = ''; // Limpa o campo de entrada
    document.getElementById('result').innerText = ''; // Limpa o resultado
}