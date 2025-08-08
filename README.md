# 🧮 Advanced Scientific Calculator

A feature-rich, modern scientific calculator built with HTML, CSS, and JavaScript. This calculator provides professional-grade mathematical functions with a beautiful, responsive interface.

## 🌐 Live Demo

**Try the calculator online:** [https://parallel-existence.surge.sh](https://parallel-existence.surge.sh)

## ✨ Features

### 🎯 Core Calculator Functions
- **Basic Operations**: Addition, subtraction, multiplication, division
- **Advanced Math**: Square root, square, cube, power, factorial
- **Real-time Preview**: See calculation results as you type
- **Memory Functions**: Store, recall, add, subtract, and clear values
- **History**: Track all calculations with export functionality

### 🔬 Scientific Functions
- **Trigonometry**: sin, cos, tan (with RAD/DEG toggle)
- **Inverse Trigonometry**: asin, acos, atan
- **Hyperbolic Functions**: sinh, cosh, tanh
- **Logarithms**: log (base 10), ln (natural log)
- **Constants**: π (pi), e (Euler's number)

### 📊 Statistical Functions
- **Mean**: Calculate average of comma-separated numbers
- **Standard Deviation**: Statistical standard deviation
- **Random Numbers**: Generate random numbers (0-1 or 1-n)

### 📐 Unit Conversion
- **Length**: km, m, cm, mm, mi, ft, in
- **Weight**: kg, g, lb, oz
- **Temperature**: Celsius, Fahrenheit, Kelvin
- **Area**: m², km², ft², in²
- **Volume**: L, mL, gal, qt

### 🎨 User Interface
- **Multiple Themes**: Dark, Light, Solarized
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Keyboard Shortcuts**: Full keyboard support
- **Button Animations**: Smooth visual feedback
- **Real-time Preview**: Live calculation results

### ⌨️ Keyboard Shortcuts
| Shortcut | Function |
|----------|----------|
| `Ctrl+P` | Insert π |
| `Ctrl+E` | Insert e |
| `Ctrl+R` | Reciprocal (1/x) |
| `Ctrl+A` | Absolute value |
| `Ctrl+N` | Negate (±) |
| `Ctrl+U` | Unit conversion |
| `Ctrl+D` | Toggle RAD/DEG |
| `Ctrl+T` | Toggle preview |
| `Enter` | Calculate |
| `Escape` | Clear |
| `Backspace` | Delete |
| `%` | Percentage |

## 🚀 Quick Start

### Method 1: Using Node.js (Recommended)
```bash
# Navigate to the calculator directory
cd calculator

# Start the server
npx http-server -p 8000

# Open your browser and go to:
# http://localhost:8000
```

### Method 2: Using Python
```bash
# If you have Python installed
python -m http.server 8000

# Open your browser and go to:
# http://localhost:8000
```

### Method 3: Direct File Opening
- Simply double-click `index.html` to open in your browser
- Or drag `index.html` into your browser window

## 📁 Project Structure

```
calculator/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── style.css           # CSS styling and themes
└── README.md          # This file
```

## 🎯 Usage Examples

### Basic Calculations
```
2 + 3 = 5
10 * 5 = 50
100 / 4 = 25
```

### Scientific Functions
```
sin(30) = 0.5 (in degrees)
cos(π) = -1
log(100) = 2
√16 = 4
```

### Statistical Functions
```
Input: 1,2,3,4,5
Mean = 3
Standard Deviation = 1.58
```

### Unit Conversion
```
100°C = 212°F = 373.15K
1 km = 1000 m = 0.621371 mi
1 kg = 1000 g = 2.20462 lb
```

### Memory Operations
```
1. Enter 5 → Click MS (Memory Store)
2. Enter 3 → Click M+ (Memory Add)
3. Click MR (Memory Recall) → Shows 8
```

## 🎨 Themes

The calculator supports three beautiful themes:

### Dark Theme (Default)
- Modern dark interface
- Easy on the eyes
- Professional appearance

### Light Theme
- Clean white interface
- High contrast
- Traditional calculator look

### Solarized Theme
- Warm, readable colors
- Reduced eye strain
- Elegant design

## 🔧 Advanced Features

### Real-time Preview
- See calculation results as you type
- Toggle on/off with the "Preview" button
- Instant feedback for complex expressions

### Enhanced Memory System
- **MS**: Memory Store - save current value
- **MR**: Memory Recall - retrieve stored value
- **M+**: Memory Add - add to stored value
- **M-**: Memory Subtract - subtract from stored value
- **MC**: Memory Clear - clear stored value

### Comprehensive Unit Conversion
- **Length**: Kilometers, meters, centimeters, millimeters, miles, feet, inches
- **Weight**: Kilograms, grams, pounds, ounces
- **Temperature**: Celsius, Fahrenheit, Kelvin
- **Area**: Square meters, square kilometers, square feet, square inches
- **Volume**: Liters, milliliters, gallons, quarts

### Statistical Analysis
- **Mean**: Calculate average of multiple numbers
- **Standard Deviation**: Measure of data spread
- **Random Numbers**: Generate random values

## 🛠️ Technical Details

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

### Dependencies
- No external dependencies required
- Pure HTML, CSS, and JavaScript
- Works offline

### Performance
- Fast calculation engine
- Smooth animations
- Responsive design
- Lightweight (no heavy frameworks)

## 🔒 Security Note

When running the local server, you may see a "Not Secure" warning. This is normal for local development servers using HTTP. The calculator is safe to use because:

- ✅ Only accessible on your local network
- ✅ No sensitive data transmission
- ✅ Temporary development server
- ✅ Standard practice for web development

To proceed safely:
1. Click "Advanced" in your browser
2. Click "Proceed to [IP] (unsafe)"
3. Your calculator will work perfectly

## 🚀 Development

### Adding New Features
1. Edit `script.js` for new functions
2. Update `index.html` for new buttons
3. Modify `style.css` for styling
4. Test in browser

### Customization
- Modify CSS variables in `style.css` for custom themes
- Add new mathematical functions in `script.js`
- Update keyboard shortcuts in the event listener

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to contribute by:
- Adding new mathematical functions
- Improving the UI/UX
- Adding new themes
- Fixing bugs
- Adding new unit conversions

## 📞 Support

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Ensure all files are in the same directory
3. Try refreshing the page (Ctrl+F5)
4. Check that the server is running properly

---

**Enjoy your enhanced scientific calculator! 🧮✨**
