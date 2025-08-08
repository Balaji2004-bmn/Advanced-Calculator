// Calculator State
let currentInput = '0';
let memoryValue = 0;
let calculationHistory = [];
let isInRadians = true; // Toggle between radians and degrees
let lastResult = 0;
let isRealTimePreview = true;

// Display Functions
function updateDisplay() {
    document.getElementById('display').value = currentInput;
    
    // Real-time calculation preview
    if (isRealTimePreview && currentInput !== '0' && !currentInput.includes('Error')) {
        try {
            let previewExpression = currentInput
                .replace(/\^/g, '**')
                .replace(/(\d+)!/g, (_, num) => {
                    let result = 1;
                    for (let i = 2; i <= num; i++) result *= i;
                    return result;
                });
            
            const previewResult = eval(previewExpression);
            if (!isNaN(previewResult) && isFinite(previewResult)) {
                document.getElementById('preview').textContent = `= ${previewResult}`;
                document.getElementById('preview').style.display = 'block';
            } else {
                document.getElementById('preview').style.display = 'none';
            }
        } catch (error) {
            document.getElementById('preview').style.display = 'none';
        }
    } else {
        document.getElementById('preview').style.display = 'none';
    }
}

function appendToDisplay(value) {
    animateButton(event.target);
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    animateButton(event.target);
    currentInput = '0';
    updateDisplay();
}

function backspace() {
    animateButton(event.target);
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

// Core Calculation
function calculate() {
    animateButton(event.target);
    try {
        const calculation = currentInput;
        
        // Error checks
        if (currentInput.includes('/0') && !currentInput.includes('/0.')) {
            throw new Error('Division by zero');
        }
        
        if (currentInput.includes('!') && (currentInput.split('!')[0] < 0 || 
            !Number.isInteger(parseFloat(currentInput.split('!')[0])))) {
            throw new Error('Invalid factorial input');
        }
        
        // Transform expressions
        let expression = currentInput
            .replace(/\^/g, '**')
            .replace(/(\d+)!/g, (_, num) => {
                let result = 1;
                for (let i = 2; i <= num; i++) result *= i;
                return result;
            });
        
        const result = eval(expression).toString();
        addToHistory(calculation, result);
        currentInput = result;
    } catch (error) {
        currentInput = 'Error: ' + error.message;
    }
    updateDisplay();
}

// Math Operations
function sqrt() {
    animateButton(event.target);
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
}

function square() {
    animateButton(event.target);
    currentInput = Math.pow(parseFloat(currentInput), 2).toString();
    updateDisplay();
}

function cube() {
    animateButton(event.target);
    currentInput = Math.pow(parseFloat(currentInput), 3).toString();
    updateDisplay();
}

function power() {
    animateButton(event.target);
    currentInput += '**';
    updateDisplay();
}

// Trigonometry (in radians)
function sin() {
    animateButton(event.target);
    let value = parseFloat(currentInput);
    if (!isInRadians) {
        value = value * Math.PI / 180;
    }
    currentInput = Math.sin(value).toString();
    updateDisplay();
}

function cos() {
    animateButton(event.target);
    let value = parseFloat(currentInput);
    if (!isInRadians) {
        value = value * Math.PI / 180;
    }
    currentInput = Math.cos(value).toString();
    updateDisplay();
}

function tan() {
    animateButton(event.target);
    let value = parseFloat(currentInput);
    if (!isInRadians) {
        value = value * Math.PI / 180;
    }
    currentInput = Math.tan(value).toString();
    updateDisplay();
}

// Logarithms
function log() {
    animateButton(event.target);
    currentInput = Math.log10(parseFloat(currentInput)).toString();
    updateDisplay();
}

function ln() {
    animateButton(event.target);
    currentInput = Math.log(parseFloat(currentInput)).toString();
    updateDisplay();
}

// Constants
function pi() {
    animateButton(event.target);
    currentInput = Math.PI.toString();
    updateDisplay();
}

function e() {
    animateButton(event.target);
    currentInput = Math.E.toString();
    updateDisplay();
}

// Factorial
function factorial() {
    animateButton(event.target);
    let num = parseInt(currentInput);
    if (num < 0) {
        currentInput = 'Error';
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) result *= i;
        currentInput = result.toString();
    }
    updateDisplay();
}

// Advanced Math Operations
function percentage() {
    animateButton(event.target);
    const value = parseFloat(currentInput);
    currentInput = (value / 100).toString();
    updateDisplay();
}

function reciprocal() {
    animateButton(event.target);
    const value = parseFloat(currentInput);
    if (value === 0) {
        currentInput = 'Error: Division by zero';
    } else {
        currentInput = (1 / value).toString();
    }
    updateDisplay();
}

function absolute() {
    animateButton(event.target);
    currentInput = Math.abs(parseFloat(currentInput)).toString();
    updateDisplay();
}

function negate() {
    animateButton(event.target);
    currentInput = (-parseFloat(currentInput)).toString();
    updateDisplay();
}

// Hyperbolic Functions
function sinh() {
    animateButton(event.target);
    currentInput = Math.sinh(parseFloat(currentInput)).toString();
    updateDisplay();
}

function cosh() {
    animateButton(event.target);
    currentInput = Math.cosh(parseFloat(currentInput)).toString();
    updateDisplay();
}

function tanh() {
    animateButton(event.target);
    currentInput = Math.tanh(parseFloat(currentInput)).toString();
    updateDisplay();
}

// Random Number Generation
function random() {
    animateButton(event.target);
    currentInput = Math.random().toString();
    updateDisplay();
}

function randomRange() {
    animateButton(event.target);
    const max = parseFloat(currentInput);
    if (max > 0) {
        currentInput = Math.floor(Math.random() * max + 1).toString();
    } else {
        currentInput = 'Error: Invalid range';
    }
    updateDisplay();
}

// Enhanced Percentage Functions
function percentageOf() {
    animateButton(event.target);
    const value = parseFloat(currentInput);
    const percentage = prompt('Enter percentage:');
    if (percentage !== null) {
        const result = (value * parseFloat(percentage)) / 100;
        addToHistory(`${value} × ${percentage}%`, result.toString());
        currentInput = result.toString();
        updateDisplay();
    }
}

function percentageChange() {
    animateButton(event.target);
    const newValue = parseFloat(currentInput);
    const oldValue = parseFloat(prompt('Enter old value:'));
    if (oldValue !== null && oldValue !== 0) {
        const change = ((newValue - oldValue) / oldValue) * 100;
        addToHistory(`Change from ${oldValue} to ${newValue}`, `${change.toFixed(2)}%`);
        currentInput = change.toString();
        updateDisplay();
    }
}

// Statistical Functions
function mean() {
    animateButton(event.target);
    const numbers = currentInput.split(',').map(n => parseFloat(n.trim()));
    if (numbers.length > 0 && !numbers.some(isNaN)) {
        const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
        addToHistory(`Mean of [${numbers.join(', ')}]`, avg.toString());
        currentInput = avg.toString();
        updateDisplay();
    } else {
        currentInput = 'Error: Invalid numbers';
        updateDisplay();
    }
}

function standardDeviation() {
    animateButton(event.target);
    const numbers = currentInput.split(',').map(n => parseFloat(n.trim()));
    if (numbers.length > 1 && !numbers.some(isNaN)) {
        const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
        const variance = numbers.reduce((sum, num) => sum + Math.pow(num - avg, 2), 0) / numbers.length;
        const stdDev = Math.sqrt(variance);
        addToHistory(`Std Dev of [${numbers.join(', ')}]`, stdDev.toString());
        currentInput = stdDev.toString();
        updateDisplay();
    } else {
        currentInput = 'Error: Need at least 2 numbers';
        updateDisplay();
    }
}

// Enhanced Unit Conversion
function convertUnits() {
    animateButton(event.target);
    const value = parseFloat(currentInput);
    const conversionType = prompt('Choose conversion:\n1. Length (km, m, cm, mm, mi, ft, in)\n2. Weight (kg, g, lb, oz)\n3. Temperature (C, F, K)\n4. Area (m², km², ft², in²)\n5. Volume (L, mL, gal, qt)');
    
    if (!conversionType) return;
    
    let result;
    switch(conversionType) {
        case '1':
            const lengthUnit = prompt('Enter unit (km, m, cm, mm, mi, ft, in):');
            if (!lengthUnit) return;
            result = convertLength(value, lengthUnit);
            break;
        case '2':
            const weightUnit = prompt('Enter unit (kg, g, lb, oz):');
            if (!weightUnit) return;
            result = convertWeight(value, weightUnit);
            break;
        case '3':
            const tempUnit = prompt('Enter unit (C, F, K):');
            if (!tempUnit) return;
            result = convertTemperature(value, tempUnit);
            break;
        case '4':
            const areaUnit = prompt('Enter unit (m², km², ft², in²):');
            if (!areaUnit) return;
            result = convertArea(value, areaUnit);
            break;
        case '5':
            const volumeUnit = prompt('Enter unit (L, mL, gal, qt):');
            if (!volumeUnit) return;
            result = convertVolume(value, volumeUnit);
            break;
        default:
            result = 'Invalid conversion type';
    }
    
    addToHistory(`Convert ${value} ${conversionType}`, result);
    currentInput = result;
    updateDisplay();
}

function convertLength(value, unit) {
    const conversions = {
        km: { m: 1000, cm: 100000, mm: 1000000, mi: 0.621371, ft: 3280.84, in: 39370.1 },
        m: { km: 0.001, cm: 100, mm: 1000, mi: 0.000621371, ft: 3.28084, in: 39.3701 },
        cm: { km: 0.00001, m: 0.01, mm: 10, mi: 0.00000621371, ft: 0.0328084, in: 0.393701 },
        mm: { km: 0.000001, m: 0.001, cm: 0.1, mi: 0.000000621371, ft: 0.00328084, in: 0.0393701 },
        mi: { km: 1.60934, m: 1609.34, cm: 160934, mm: 1609340, ft: 5280, in: 63360 },
        ft: { km: 0.0003048, m: 0.3048, cm: 30.48, mm: 304.8, mi: 0.000189394, in: 12 },
        in: { km: 0.0000254, m: 0.0254, cm: 2.54, mm: 25.4, mi: 0.0000157828, ft: 0.0833333 }
    };
    
    if (!conversions[unit]) return 'Invalid unit';
    
    let result = `${value} ${unit} = `;
    Object.entries(conversions[unit]).forEach(([targetUnit, factor]) => {
        result += `${(value * factor).toFixed(4)} ${targetUnit}, `;
    });
    return result.slice(0, -2);
}

function convertWeight(value, unit) {
    const conversions = {
        kg: { g: 1000, lb: 2.20462, oz: 35.274 },
        g: { kg: 0.001, lb: 0.00220462, oz: 0.035274 },
        lb: { kg: 0.453592, g: 453.592, oz: 16 },
        oz: { kg: 0.0283495, g: 28.3495, lb: 0.0625 }
    };
    
    if (!conversions[unit]) return 'Invalid unit';
    
    let result = `${value} ${unit} = `;
    Object.entries(conversions[unit]).forEach(([targetUnit, factor]) => {
        result += `${(value * factor).toFixed(4)} ${targetUnit}, `;
    });
    return result.slice(0, -2);
}

function convertTemperature(value, unit) {
    let result;
    switch(unit.toUpperCase()) {
        case 'C':
            result = `${value}°C = ${(value * 9/5) + 32}°F = ${value + 273.15}K`;
            break;
        case 'F':
            result = `${value}°F = ${(value - 32) * 5/9}°C = ${(value - 32) * 5/9 + 273.15}K`;
            break;
        case 'K':
            result = `${value}K = ${value - 273.15}°C = ${(value - 273.15) * 9/5 + 32}°F`;
            break;
        default:
            result = 'Invalid temperature unit';
    }
    return result;
}

function convertArea(value, unit) {
    const conversions = {
        'm²': { 'km²': 0.000001, 'ft²': 10.7639, 'in²': 1550 },
        'km²': { 'm²': 1000000, 'ft²': 10763910.4, 'in²': 1550003100 },
        'ft²': { 'm²': 0.092903, 'km²': 0.000000092903, 'in²': 144 },
        'in²': { 'm²': 0.00064516, 'km²': 0.00000000064516, 'ft²': 0.00694444 }
    };
    
    if (!conversions[unit]) return 'Invalid unit';
    
    let result = `${value} ${unit} = `;
    Object.entries(conversions[unit]).forEach(([targetUnit, factor]) => {
        result += `${(value * factor).toFixed(4)} ${targetUnit}, `;
    });
    return result.slice(0, -2);
}

function convertVolume(value, unit) {
    const conversions = {
        L: { mL: 1000, gal: 0.264172, qt: 1.05669 },
        mL: { L: 0.001, gal: 0.000264172, qt: 0.00105669 },
        gal: { L: 3.78541, mL: 3785.41, qt: 4 },
        qt: { L: 0.946353, mL: 946.353, gal: 0.25 }
    };
    
    if (!conversions[unit]) return 'Invalid unit';
    
    let result = `${value} ${unit} = `;
    Object.entries(conversions[unit]).forEach(([targetUnit, factor]) => {
        result += `${(value * factor).toFixed(4)} ${targetUnit}, `;
    });
    return result.slice(0, -2);
}

// Enhanced Trigonometry with Degree/Radian toggle
function toggleAngleUnit() {
    isInRadians = !isInRadians;
    document.getElementById('angle-unit').textContent = isInRadians ? 'RAD' : 'DEG';
}

// Inverse Trigonometry
function asin() {
    animateButton(event.target);
    let value = Math.asin(parseFloat(currentInput));
    if (!isInRadians) {
        value = value * 180 / Math.PI;
    }
    currentInput = value.toString();
    updateDisplay();
}

function acos() {
    animateButton(event.target);
    let value = Math.acos(parseFloat(currentInput));
    if (!isInRadians) {
        value = value * 180 / Math.PI;
    }
    currentInput = value.toString();
    updateDisplay();
}

function atan() {
    animateButton(event.target);
    let value = Math.atan(parseFloat(currentInput));
    if (!isInRadians) {
        value = value * 180 / Math.PI;
    }
    currentInput = value.toString();
    updateDisplay();
}

// Memory Functions
function memoryStore() {
    animateButton(event.target);
    memoryValue = parseFloat(currentInput) || 0;
    showNotification('Value stored in memory');
}

function memoryAdd() {
    animateButton(event.target);
    memoryValue += parseFloat(currentInput) || 0;
    showNotification(`Added to memory: ${memoryValue}`);
}

function memorySubtract() {
    animateButton(event.target);
    memoryValue -= parseFloat(currentInput) || 0;
    showNotification(`Subtracted from memory: ${memoryValue}`);
}

function memoryRecall() {
    animateButton(event.target);
    currentInput = memoryValue.toString();
    updateDisplay();
    showNotification(`Recalled from memory: ${memoryValue}`);
}

function memoryClear() {
    animateButton(event.target);
    memoryValue = 0;
    showNotification('Memory cleared');
}

// History Functions
function addToHistory(calculation, result) {
    calculationHistory.unshift(`${calculation} = ${result}`);
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = calculationHistory
        .map(item => `<li onclick="loadFromHistory('${item.split(' = ')[0]}')">${item}</li>`)
        .join('');
}

function loadFromHistory(calculation) {
    currentInput = calculation;
    updateDisplay();
}

function clearHistory() {
    animateButton(event.target);
    calculationHistory = [];
    document.getElementById('history-list').innerHTML = '';
}

// Theme Management
function setTheme(themeName) {
    document.body.className = themeName;
    localStorage.setItem('calculatorTheme', themeName);
}

// Button Animation
function animateButton(button) {
    button.classList.add('button-press');
    setTimeout(() => button.classList.remove('button-press'), 200);
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Enhanced History with Export
function exportHistory() {
    const historyText = calculationHistory.join('\n');
    const blob = new Blob([historyText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'calculator_history.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Real-time Preview Toggle
function toggleRealTimePreview() {
    isRealTimePreview = !isRealTimePreview;
    document.getElementById('preview-toggle').textContent = 
        isRealTimePreview ? 'Preview: ON' : 'Preview: OFF';
    updateDisplay();
}

// Enhanced Keyboard Support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === '!') {
        factorial();
    } else if (key === 'p' && event.ctrlKey) {
        pi();
    } else if (key === 'e' && event.ctrlKey) {
        e();
    } else if (key === '%') {
        percentage();
    } else if (key === 'r' && event.ctrlKey) {
        reciprocal();
    } else if (key === 'a' && event.ctrlKey) {
        absolute();
    } else if (key === 'n' && event.ctrlKey) {
        negate();
    } else if (key === 'u' && event.ctrlKey) {
        convertUnits();
    } else if (key === 'd' && event.ctrlKey) {
        toggleAngleUnit();
    } else if (key === 'h' && event.ctrlKey) {
        exportHistory();
    } else if (key === 't' && event.ctrlKey) {
        toggleRealTimePreview();
    }
});

// Initialize with enhanced features
window.onload = function() {
    updateDisplay();
    setTheme(localStorage.getItem('calculatorTheme') || 'dark');
    
    // Add preview element if it doesn't exist
    if (!document.getElementById('preview')) {
        const preview = document.createElement('div');
        preview.id = 'preview';
        preview.className = 'preview';
        document.getElementById('display').parentNode.appendChild(preview);
    }
    
    // Add angle unit indicator if it doesn't exist
    if (!document.getElementById('angle-unit')) {
        const angleUnit = document.createElement('div');
        angleUnit.id = 'angle-unit';
        angleUnit.className = 'angle-unit';
        angleUnit.textContent = 'RAD';
        document.querySelector('.calculator').appendChild(angleUnit);
    }
};