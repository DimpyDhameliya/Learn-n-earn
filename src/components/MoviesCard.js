import React from 'react'

function MoviesCard({name ,poster ,ratings}) {
  return (
    <div >
        <div className="card" style={{width: '18rem'}}>
  <img src={poster} className="card-img-top" style= {{ aspectRatio:1/1 }}alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <h5 className="card-title">{ratings}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"> Book Now
    </a>
  </div>
</div>


    </div>
  );
}

export default MoviesCard