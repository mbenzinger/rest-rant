const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img id='hero' src="/images/food.jpg" alt="food image"/>
              </div>
              <div>
              Photo by <a href="https://unsplash.com/@edgarraw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar Castrejon</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home
