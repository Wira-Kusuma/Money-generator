# Money Generator

Money Generator is a simple web application built with HTML, CSS, and JavaScript that simulates a "virtual money generator." This project is designed as a basic exercise in programming logic, DOM manipulation, localStorage usage, event handling, and simple UI management without frameworks.

## Features

- **Manual Money Addition**  
  Users can manually increase their money balance by clicking a button.

- **Auto Generate**  
  Users can activate an auto-generate feature to increase money at a regular interval (e.g., every 0.5 seconds), provided they have enough balance to unlock it.

- **Reset Money**  
  Users can reset their balance to the initial value at the cost of a certain amount of money.

- **Local Storage**  
  The current money amount is saved in `localStorage`, so your progress persists after refreshing or reopening the page.

- **Simple Login Page**  
  When the app is loaded, a login page will appear. You are free to enter any username you like, and any password (no restrictions).

- **Simple Interface**  
  The UI is intentionally minimal and easy to use.

## How It Works

1. When you open the app, you will see a login form. Enter any username and any password you wish (no validation required).
2. After logging in, you can add money manually by clicking a button.
3. Once your balance reaches a certain amount, you can enable the auto-generate feature.
4. Auto-generate will add money automatically every interval.
5. You can reset your balance at any time using the reset button (with a cost).
6. All progress is saved locally in your browser.

## Installation & Usage

No special installation is required. Just clone this repository and open the `index.html` file in your web browser:

```bash
git clone https://github.com/Wira-Kusuma/Money-generator.git
cd Money-generator
# Open index.html in your browser
```

## File Structure

- `index.html` – Main application interface.
- `style.css` – Basic styles for the UI.
- `script.js` – Main application logic.

## Contributing

Feel free to fork the repository and submit a pull request to add features or fix bugs.

## License

This project is licensed under the [MIT License](LICENSE).

---

> **Note:** This project is for educational and experimental purposes only. It does not represent actual financial transactions or real money generation.