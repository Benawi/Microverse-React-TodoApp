<a name="readme-top"></a>
### <div align="center"><a href="#"><img src="https://github.com/Benawi/Benawi/assets/21217148/de823737-5f7f-4de8-b62e-3fe88c238eab"/></a></div> 

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [Live Demo](#live-demo)
    <!-- - [Walkthrough](#Walkthrough) -->
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)

- [📝 License](#license)

# 📖 Todo List React Project <a name="about-project"></a>

Todo List React Project - Microverse! project is a repository consisting of the following files:
- Html files
- CSS files
- JS files
- Html,CSS and JS linters file

## 🛠 Built With <a name="built-with"></a>

## Tech Stack <a name="tech-stack"></a>

<ul>
  <ul>
  <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">HTML</a></li>
  <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">CSS</a></li>
      <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">JS</a></li>
</ul>


## 🔑 Key Features <a name="key-features"></a>

### React Project: TODO List [Requirements](https://github.com/microverseinc/curriculum-react-redux/blob/main/math-magicians/exercises/react_tutorial.md)

### Features Added:
- Create an index.html file and 
- To Do List placeholder (div or ul element).
- The index.html file must be set as a template .
- Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object  contain three keys:
   - description [string].
   - completed [bool].
   - index: [number].
- A function to iterate over the tasks array and populate an HTML list item element for each task.
- On page load render the dynamically created list of tasks in the dedicated placeholder. The list  appear in order of the index values for each task.
- Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. 
-All hardcoded items deleted from the tasks array. List structure #1 .
- A new JavaScript file for the new functionality created.
- A function for adding a new task is implemented
- By default new tasks wil have the property completed set to false and the property index set to the value of the new array length (i.e. if you're adding a 5th task to the list, the index of that task will be equal to 5).
- Deleting a task will update all remaining items' indexes, so they represent the current list order and are unique(i.e. if you're deleting the first task index 1 from the list, the index of the next task(2) will set to 1)..
- A new JavaScript file is added and imported as a module:
     - It contain methods related to the status updates (completed: true / false).
 - Add event listener to the checkbox (change).
 - Items object's value for completed key will updated upon user actions.
- A function for the "Clear all completed" is implemented - button (filter() method used).
- The updated array of items will be stored in local storage, so the user gets the correct list of values after the page reloads (which means that any changes made to the list will be preserved).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🌐 Live Demo <a name="#live-demo"></a>
- [React Todo App](#) 
- Learn More [How to deploy react app](https://github.com/gitname/react-gh-pages)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started with Create React App <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Setup

Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:Microverse-JS-Capstone.git

### Prerequisites

In order to run this project you need:

- gitHub account;
- git installed on your OS.

### Install

> [Linters](https://github.com/microverseinc/linters-config/tree/master/html-css-js)

- Installations required to run this project:

### Install the node module

- Run the following command:

```
npm install
```
### Creat the react 
[Create react app](https://create-react-app.dev/docs/getting-started)

- Run the following command:

```
npx create-react-app my-app
cd my-app
npm start
```

### In order to import a CSS file add the style-loader and css-loader to your module configuration

- Run the following command:

```
npm install --save-dev style-loader css-loader
```

### Webhint installation.

- Run the following command:

```
npm install --save-dev hint@7.x
```

### Stylelint installation.

- Run the following command:

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

### ESLint

- Run

```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

### Usage

You can use this project by cloning it to your folder and changing index.html and styles.css files.

### Run tests

To run tests, run the following commands:

To track linter errors locally follow these steps:

Download all the dependencies run:

```
npm install
```

Track HTML linter errors run:

```
npx hint .
```

Track CSS linter errors run:

```
npx stylelint "**/*.{css,scss}"
```

Track JavaScript linter errors run:

```
npx eslint .
```

### Deployment

You can redeploy this project by adding new lines of code to source files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

### 👤 Habtamu Alemayehu

- GitHub: [Benawi](https://github.com/Benawi)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- Todo List App: [Full website](https://github.com/microverseinc/curriculum-react-redux/blob/main/math-magicians/project_full_website_v2.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give me ⭐️ If you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- We would like to thank Microverse program for providing us this great chance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
