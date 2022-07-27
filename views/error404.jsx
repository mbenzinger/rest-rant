const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="/images/ignignokt-flipoff.png" alt="ignignokt image"/>
              </div>
              <p>Sorry, we couldn't find your primitive Earth page</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
