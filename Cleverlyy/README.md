# DOCUMENTATION

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. To get started , clone the github repo by :

   ```bash
   git clone https://github.com/AymanIHakim/Cleverlyy.git
   ```

2. Open the repo in you local machine and change the terminal directory to ./frontend

   ```bash
    cd ./frontend
   ```

3. Open the repo in you local machine and change the terminal directory to ./frontend

   ```bash
    cd ./frontend
   ```

4. Run the following command to install all the required dependencies and packages:

   ```bash
    npm i
   ```

5. Start the project by:

   ```bash
    npm run start
   ```

6. Start the project by:

   ```bash
    npm run start
   ```

7. Cheers! Everything is set to go.

## FAQ

1. How to add a new file or directory to our project?

   Step 1: Create a new file or directory.

   step 2: Go to the app/\_layout.tsx and enlist your or directory if it is not already there.

   tips: Now you can use Link tag in reactNative to navigate to your file or directory.

2. How to integrate sidebar in your file ?

   step 1: import sidebar Component in your file using relative path like this:

   ```bash
   import Sidebar from "./../../../components/SimpleSidebar";
   ```

   step 2: you need to pass state handler to the sidebar component as props like this:

   ```bash

   const yourPage = () => {

   const [isSidebarVisible, setIsSidebarVisible] = useState(false);
   const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
      };
   ...............................................................
   ................................................................ //your code here...

   return (
         <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
         .......................................
         ....................................... //your code here...
   )
   }
   ```

   tips : You need to leave some spaces for sidebar in your page. add marginLeft and test the most suitable formatting.
