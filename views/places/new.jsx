const React = require('react')
const Def = require('../default')

function mew (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  


module.exports = mew