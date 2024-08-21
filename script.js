function showClass(className) {
    document.querySelectorAll('.class-item').forEach(item => {
        item.style.display = 'none';
    });
    const classElement = document.getElementById(className);
    if (classElement) {
        classElement.style.display = 'block';
    }
}

function calculateBMI(event) {
    event.preventDefault();
    
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    
    // Geçerli giriş olup olmadığını kontrol et
    if (!heightInput || !weightInput || isNaN(heightInput) || isNaN(weightInput)) {
        alert("Lütfen geçerli bir boy ve kilo giriniz.");
        return;
    }
    
    const height = parseFloat(heightInput) / 100;
    const weight = parseFloat(weightInput);
    
    // Negatif veya sıfır değerlerin kontrolü
    if (height <= 0 || weight <= 0) {
        alert("Lütfen sıfırdan büyük geçerli bir boy ve kilo giriniz.");
        return;
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-value').innerText = bmi;
}
