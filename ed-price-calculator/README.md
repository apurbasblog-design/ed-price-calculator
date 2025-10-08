# Pricing Calculator Project

## Overview
This project is a 3D Rendering Pricing Calculator that allows users to calculate the cost of rendering services based on selected categories, quantities, and complexities. The calculator provides a user-friendly interface and displays relevant information dynamically.

## Project Structure
```
ed-price-calculator
├── src
│   ├── css
│   │   ├── styles.css        # Main styles for the pricing calculator
│   │   └── modal.css         # Styles for the modal component
│   ├── js
│   │   ├── calculator.js      # Logic for the pricing calculator
│   │   ├── modal.js           # Logic for modal functionality
│   │   └── carousel.js        # Logic for carousel functionality within the modal
│   └── pricing_calculator.html # Main HTML file for the pricing calculator
├── public
│   └── assets
│       ├── images             # Directory for rendering sample images
│       └── icons              # Directory for icon images
├── .gitignore                 # Specifies files to be ignored by Git
├── package.json               # Configuration file for npm
└── README.md                  # Documentation for the project
```

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd ed-price-calculator
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Project**
   Open `src/pricing_calculator.html` in your web browser to view the pricing calculator.

## Usage
- Select the rendering category from the dropdown menu.
- Adjust the number of renderings using the slider or input box.
- Choose the complexity level.
- Click the "Calculate" button to see the total price and any applicable discounts.

## Modal and Carousel
The project includes a modal that displays additional rendering samples when the user clicks on "See more samples." The modal features a carousel that allows users to navigate through multiple images.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.