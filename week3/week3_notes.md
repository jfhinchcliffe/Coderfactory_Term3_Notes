# Week 3
## React Intro and JSX

React can generate basic DOM elements. 

React.createElement('h1', {}, 'Hello World');

3 arguments in a React createElement:
- element type.
- procs (attributes. ie for an img, src='')
- child content that goes inside the element.

Can create a point where React will inster elements. ie
<body><div id='my-app></div>

ReactDom.render(element, document.getElementById('my-app));

React renders inside the main div, using it as a container. 

Adds a 'data-reactroot' to the tag to keep track.

The props (second argument) takesn an object that allows you to change properties on the element. 

Can nest react elements. 
var element = React.createElement('h1', {}, 'Hello World'),

## JSX - Javascript XML

seeting HTML to a value in JS, and then passing to ReactDOM.render(element, document.getElementById

## Babel
Javascript transpiler, converts es2015 JS to ES5
Also has a JSX converter

Create JSX code and check [Babel.io/repl](https://babeljs.io/repl/) to see what it transpiles to.

## React Components
UI parts split into reusable, independent pieces. 
You can seprate any section of ui control of your web page into a component.

Components are build with functions.   

Building a componenet

# Simple Express / Node / React App 

## Creating a new app and including React

1. Create a new Node / Express app: `express --view=ejs --git my-new-app` and cd into the app directory

2. As per the [Express React Views](https://github.com/reactjs/express-react-views) github, run `npm install express-react-views react react-dom -S` to install the required packages.

3. Run npm install to install all required packages.

4. In console, run `nodemon` to start a server. Open a browser and ensure localhost:3000 is responding.

5. From [Express React Views](https://github.com/reactjs/express-react-views), add the following to your app.js file so it uses express:
```
  // app.js
  var app = express();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
```

6. Rename 'views/index.ejs' to 'views/index.jsx' and set it up as a .jsx file type:
```
  import React from 'react'

  export default function Component({ title }) {
    return (
      <h1>{ title }</h1>
    )
  }
```

7. Rename 'views/error.ejs' to 'views/error.jsx' and set it up as a .jsx file type:
```
  import React from 'react'
  export default function Component ( { message, error}) {
    return (
      <div>
          <h1>{message}</h1>
          <p>{error.status}</p>
          <p>{error.code}</p>
      </div> 
    )
  }
 ```

8. In routes/index.js, change the title variable passed to the view to 'React' (just to be sure that the inex page is referencing the correct route).
```
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'React' });
  });

  module.exports = router;
```

9. Assuming your server is running, go to localhost:3000 and ensure that the title 'React' is showing. Yeeha!

## Adding a standard layout

1. Create a 'layout.jsx' file in the views folder and add a HTML template of commong HTML elements that will be required on each page:
```
  import React from 'react'

  export default function Layout({ children }) {
    return (
      <html>
          <head>
              <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
          </head>
          <body className='container' >
            <main>
                { children }
            </main> 
          </body>
      </html>
    )
  }
```

2. In the 'views/index.js' page, require the new layouts.jsx file:
```
import Layout from './layout'
```

3. And this layout can now be used to wrap around the elements displayed in the index.jsx (or any!) page, like so:
```
  import React from 'react'
  import Layout from './layout'

  export default function Component({ title }) {
    return (
      <Layout>
        <h1>{ title }</h1>
      </Layout>  
    )
  }
```

## Adding more React elements

1. Pages are built up from multiple React elements. As our Layout has included Bootstrap, we can build and include a Jumbotron element.

2. In the 'views' folder, create a 'bootstrap' folder, and add 'Jumbo.js':
```
  import React from 'react'

  export default function Jumbo({ heading, text }){
    return (
      <div className="jumbotron">
        <h1>{ heading }</h1>
        <p>{ text }</p>
      </div>
    )
  }
```
This Jumbotron component takes 2 arguments - one for the heading and one for the text - and returns a populated Jumbotron.

3. Import the new Jumbo file you created into the 'views/index.js' file. Create a new Jumbo tag and feed it the heading and text values:
```
import React from 'react'
import Layout from './layout'
import Jumbo from './bootstrap/Jumbo'

export default function Component({ title }) {
  return (
    <Layout>
      <Jumbo heading='My Heading' text='this is some text' />
      <h1>{ title }</h1>
    </Layout>  
  )
}
```

4. Refresh your localhost:3000 and voila - a Jumbotron! You can use this same method to add other bootstrap / html elements.

## Default Props and Types
PropTypes
Array, boolean, function number, object, string, 

Default props
```
Button.deafultProps = {
  color:'blue';
};
```

## Lifecycle 
A react component has a bunch of methods that can be used to alter the life of that component.

## Project 
Hybrid - Node.js API and React front-end

## Day 3
### A Counter with React

[Patrick's Mern Boilerplate](https://github.com/BurntCaramel/MERN-Boilerplate-Counter)