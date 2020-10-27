# Sup Bruh? Pt 2

Updated the sample app in lesson 1. Used to discuss basic styling and the application of es6 destructuring to React props.

## Installing Bootstrap

1. Run `npm install react-bootstrap bootstrap` in your project. This should install the essentials.
2. To import bootstrap css, add this to the top layer component `import 'bootstrap/dist/css/bootstrap.min.css'`.

## Importing and using a Bootstrap component

You can import any react component in any of your component files simply by the import syntax like so:

```
// ideally we load only what we need
import Button from 'react-bootstrap/Button';

// valid but less ideal cause it loads the whole react-bootstrap lib
import { Button } from 'react-bootstrap';
```

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
