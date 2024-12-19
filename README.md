# JUR RISE11

## Overview
This project is a replication of the provided dashboard design, built using React.js. The goal was to recreate the layout, responsiveness, and functionality while adhering to the assignment's requirements. The implementation focuses on modular components, clean code structure, and responsive design to ensure usability across various devices.

## Live Link
https://jur-rise11.netlify.app/ 
Deployed on Netlify

## Approach

### 1. **Design Replication**
- Carefully analyzed the provided dashboard image to capture the design elements.
- Used CSS flexbox and grid to align components and maintain the layout.
- Ensured spacing, colors, and typography matched the given design.

### 2. **Modular Components**
- Divided the project into reusable components, such as:
  - `Sidebar`
  - `Header`
  - `ClaimForm`
  - `UploadSection`
  - `ProgressBar`
- Each component was styled and tested individually for consistency.

### 3. **Responsive Design**
- Implemented media queries to ensure responsiveness on different screen sizes (desktop, tablet, mobile).
- Tested using Chrome DevTools for various devices.

### 4. **Interactivity**
- Added interactive elements like file upload, form validation, and dynamic progress indicators.
- Used React state management to update and render UI dynamically.

### 5. **Form Validation**
- Integrated input validation for forms to prevent empty submissions and invalid data.
- Displayed error messages for user guidance.

### 6. **Dynamic Elements**
- Built a progress bar to indicate the current step and time estimates for uncompleted tasks.
- Included hover effects and click states for buttons and menu items.

## Challenges and Resolutions

### 1. **Layout Matching**
- **Challenge**: Precisely matching the given layout required meticulous CSS tweaking.
- **Resolution**: Iterated through multiple visual checks and adjustments using CSS grid and flexbox.

### 2. **Responsive Design**
- **Challenge**: Maintaining the design’s integrity on smaller screens.
- **Resolution**: Used percentage-based widths, flexible containers, and breakpoints to ensure adaptability.

### 3. **File Upload Styling**
- **Challenge**: Customizing the file upload button while maintaining browser compatibility.
- **Resolution**: Styled the file input using hidden inputs and custom labels.

### 4. **Progress Bar Logic**
- **Challenge**: Dynamically updating progress bar states and time estimates.
- **Resolution**: Leveraged React’s state and conditional rendering to track and display progress accurately.

## Assumptions
- The "Approx 5 Minutes" time estimate is a placeholder and static.
- File uploads are not integrated with a backend, as the assignment focuses on frontend replication.
- Placeholder images and icons are used where specific assets were not provided.
- The "Agreement in Disputes" and "Additional Documentation" sections only accept PDFs with a maximum size of 2MB, as stated.

## File Structure
```
src/
├── components/
│   ├── ClaimForm/
│   │   ├── ClaimForm.js
│   │   ├── ClaimForm.css
│   ├── Header/
│   │   ├── Header.js
│   │   ├── Header.css
│   ├── NavBar/
│   │   ├── NavBar.js
│   │   ├── NavBar.css
│   ├── Sidebar/
│   │   ├── Sidebar.js
│   │   ├── Sidebar.css
│   ├── UploadSection/
│   │   ├── UploadSection.js
│   │   ├── UploadSection.css
├── App.js
├── App.css
├── index.js
├── index.css
```

## How to Run the Project
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open `http://localhost:3000` in your browser to view the dashboard.

## Future Enhancements
- Integrate a backend for file uploads and data storage.
- Add animations for smoother transitions between steps.
- Implement a dark mode toggle for better user experience.

