const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
          <main>
            <h1>{DataTransfer.place.name}</h1> 
          </main>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
          </a>   
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
            Delete
            </button>
          </form> 
        </Def>
    )
}

module.exports = show


/* 9.2.4 copied code here.  cannot determine where thsi goes. Also recieving an error regarding line 8 "data transefer is not defnined"
<Def>
  <main>
    <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
        ...
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        ...
    </div>
  </main>
</Def>

*/