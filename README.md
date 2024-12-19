# JUR RISE11

## Overview
This project is a replication of the provided dashboard design, built entirely using React.js. It closely mirrors the layout, functionality, and responsiveness outlined in the assignment, adhering to all specified requirements. The implementation focuses on creating modular components, ensuring clean code structure, and achieving full responsiveness for an optimal user experience across devices.

## Live Link
[Live Demo on Netlify](https://jur-rise11.netlify.app/)

## Approach

### **1. Design Replication**
- Carefully analyzed the provided dashboard image to recreate the design pixel-perfectly.
- Used CSS flexbox and grid to achieve precise alignment and maintain consistent spacing across all elements.
- Ensured color schemes, typography, and component styles matched the provided design exactly.
- Styled components individually to maintain modularity and avoid CSS overlaps.

### **2. Modular Components**
- Structured the project into reusable and independent components for scalability and ease of maintenance:
  - `Sidebar`: Contains navigation links and icons.
  - `NavBar`: Includes notification icon, and user profile section.
  - `ProgressBar`: Displays the current dashboard title and breadcrumbs.
  - `ClaimForm`: Includes form fields with input validation.
  - `UploadSection`: Manages file uploads with styling and error handling.
  - `ProgressBar`: Dynamically updates progress based on user actions.
- Followed best practices to pass props and manage state effectively.

### **3. Responsive Design**
- Used media queries to ensure responsiveness across desktop, tablet, and mobile views.
- Tested extensively on Chrome DevTools and multiple devices to ensure consistent layout.
- Adapted flexbox and grid layouts to dynamically resize and reorganize content on smaller screens.
- Ensured touch-friendly interactions for mobile devices.

### **4. Interactivity**
- Fully implemented interactive elements:
  - File upload: Styled the file input button and allowed users to upload files with restrictions (e.g., PDFs up to 2MB).
  - Progress bar: Dynamically updates based on completed steps and displays current progress.
  - Form elements: Included checkboxes, dropdowns, and buttons with click states.
  - Hover effects: Added subtle hover effects to buttons and navigation items for a polished user experience.

### **5. Form Validation**
- Integrated real-time input validation for all form fields:
  - Prevented empty submissions with error messages for required fields.
  - Checked file type and size for uploaded documents.
  - Added visual feedback for validation errors to guide the user.
- Used React state management to validate inputs dynamically and render appropriate messages.

### **6. Dynamic Elements**
- Built a functional progress bar to indicate user progress dynamically.
  - Updates automatically as users complete form sections or upload files.
- Ensured dropdown menus and checkboxes responded accurately to user input.
- Added real-time error handling for invalid file uploads.

## Challenges and Resolutions

### **1. Layout Matching**
- **Challenge**: Precisely matching the given layout required meticulous attention to detail.
- **Resolution**: Used CSS grid and flexbox for positioning, iterating multiple times to refine alignment and spacing.

### **2. Responsive Design**
- **Challenge**: Maintaining the design’s integrity on smaller screens without breaking the layout.
- **Resolution**: Utilized flexible units like percentages and em/rem for sizing, combined with tailored breakpoints.

### **3. File Upload Styling**
- **Challenge**: Customizing the file upload input to match the design while retaining browser compatibility.
- **Resolution**: Styled the input using hidden native elements with custom labels and CSS.

### **4. Progress Bar Logic**
- **Challenge**: Dynamically updating the progress bar based on user interactions.
- **Resolution**: Leveraged React state and conditional rendering to calculate progress and update UI seamlessly.

## Assumptions
- The displayed time estimate (“Approx 5 Minutes”) is static and serves as a placeholder.
- File uploads are restricted to PDFs with a maximum size of 2MB.
- Backend integration is outside the scope of this assignment, so file uploads are handled on the frontend.
- Placeholder icons and images were used where specific assets were not provided.

## File Structure
```
src/
├── components/
│   ├── ClaimForm/
│   │   ├── ClaimForm.js
│   │   ├── ClaimForm.css
│   ├── Progress/
│   │   ├── ProgressBar.js
│   │   ├── Progress.css
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
- Integrate backend functionality to handle file uploads and data storage.
- Add animations for smoother transitions and improved user experience.
- Implement dark mode for better accessibility and user preferences.

---
By following the assignment guidelines rigorously, I ensured all specified features and design requirements were implemented successfully while maintaining code quality and scalability.

# Thank you.



