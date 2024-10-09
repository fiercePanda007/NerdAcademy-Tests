# Cleverlyy Expo App Documentation 👋

Welcome to the Cleverlyy Expo app! This project is built using [Expo](https://expo.dev) and initialized with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). Follow the steps below to set up and start the project on your local machine.

## Getting Started

### Step 1: Clone the Repository

First, clone the repository from GitHub by running the following command in your terminal:

```bash
git clone https://github.com/AymanIHakim/Cleverlyy.git
```

### Step 2. After cloning the repository, open the project folder on your local machine and navigate to the frontend directory by running:

```bash
 cd ./frontend
```

### step 3. Now, install all the required dependencies and packages by running the following command:

```bash
 npm i
```

### step 4. Once the dependencies are installed, start the Expo project with the following command:

```bash
 npm run start
```

### step 5. Congrats! Your Expo app should now be up and running. 🎉

# FAQ

### 1. 1. How to Add a New File or Directory to the Project?

      Step 1: Create the File or Directory
              Add your new file or directory to the project as needed.

      Step 2: Register the File or Directory in the Layout
              Next, add the path to your file or directory in app/_layout.tsx to ensure proper navigation. Use relative paths from the app directory.
      Example:

```bash
   //@app/_layout.tsx

   export default function RootLayout() {
      return (
         <Stack screenOptions={{ headerShown: false }}>
               {/* Other existing routes */}
               .........................................
            <Stack.Screen name="PATH-To-Your-FILE-Or-DIRECTORY" /> {/* Use this path for navigation */}
         </Stack>

         );
      }

```

\*tips1:While enlisting your file or directory into our project please note that you SHOULD use paths relative to the [app] directory.

\*tips2: Use the same path you registered here in a Link tag to navigate between pages.

### 2. How to integrate Sidebar in your file ?

      step 1: import sidebar Component in your file using relative path like this:


      import Sidebar from "./../../../components/SimpleSidebar";  // Adjust the path relative to your current directory


      step 2: You need to pass a state handler to the Sidebar component for visibility control. Here’s a sample implementation:



      const yourPage = () => {

         const [isSidebarVisible, setIsSidebarVisible] = useState(false);
         const toggleSidebar = () => {
            setIsSidebarVisible(!isSidebarVisible);
         };

            {/* your code here... */}

         return (
            <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
                     {/* your code here... */}
            )
         }


      tips : The sidebar component should be styled appropriately to fit within your page’s layout. You may need to adjust the marginLeft or other CSS properties to ensure the sidebar is correctly placed without overlapping your content
