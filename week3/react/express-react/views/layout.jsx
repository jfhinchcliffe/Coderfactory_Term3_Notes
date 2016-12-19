import React from 'react'

export default function Layout({ metaTags, children }) {
  return (
    <html>
        <head>
            { metaTags }
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
            <link href="./css/styles.css" rel="stylesheet" />
        </head>
        <body className='container' >
          <main>
              { children }
          </main> 
        </body>
    </html>
  )
}