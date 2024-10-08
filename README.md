# Testing Steps
## React Environment Setup & Running with Parcel

**Note: Make sure you download the files in this repository and run the `npm` commands in the project directory that includes these files.**

### 1. **Install Node.js and npm**
Node.js and npm (Node Package Manager) are required to manage packages and run the project.

- Download and install Node.js from [nodejs.org](https://nodejs.org/). This will install both Node.js and npm.
- Open Terminal on your Mac computer.
- Verify installation by running the following commands in your terminal:
  ```bash
  node -v
  npm -v
  ```

### 2. **Initialize the Project**
Open your terminal and navigate to your project folder.

1. Initialize a new Node.js project in your project folder:
   ```bash
   npm init -y
   ```

### 3. **Install React and ReactDOM**
Install `react` and `react-dom` packages to start using React in your project.

```bash
npm install react react-dom react-native-web
```

### 4. **Install Parcel as a Development Tool**
Parcel is a simple, zero-configuration web application bundler.

1. Install Parcel globally:
   ```bash
   npm install -g parcel-bundler
   ```

### 5. **Running the Project with Parcel**
Once you have your React files set up, you can use Parcel to bundle and serve your project.

1. Run the Parcel server to bundle the project and serve it locally:
   ```bash
   parcel index.html
   ```

2. Parcel will automatically start a local development server (usually at `http://localhost:1234`).

### 6. **Test the Application**
After running Parcel, you can test the application by opening a browser and navigating to the local server URL:

- **Local server URL**: 
  ```bash
  http://localhost:1234
  ```

### 7. **Optional: Clean Parcel Cache**
If you encounter any issues with Parcel, you can clear the cache by running:

```bash
parcel clean
```

---

# Testing Other Screens
If you want to create a new screen and test it, you will have to update the screen that is being called from `App.js`.

### 1. Open App.js in an Text Editor
Modify the import statement to use the screen you want to test. Use the path to the file `./<path-to-file>/<file-name>`:
```
import PlanScreen from './test-screens/PlanScreen';
```

### 2. Change the Tag with the Screen Name

```
export default function App() {
  return (
    <View style={[styles.container, { width, height }]}>
// Modify the line below with the screen name (Ex. <NewScreen />) 
      <PlanScreen />
    </View>
  );
}
```

## Summary of Commands:

1. **Install React**:
   ```bash
   npm install react react-dom react-native-web
   ```

2. **Install Parcel**:
   ```bash
   npm install -g parcel-bundler
   ```

3. **Run the Project**:
   ```bash
   parcel index.html
   ```

---

This document provides the steps to set up a React project using Parcel and how to run the local development environment. Let me know if you need any further details!
