import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container'>
        <div className="allButtons">
        <button type="button" class="m-2 btn btn-lg btn-primary"><Link to="/assignment/0">All Data</Link></button>
        <button type="button" class="m-2 btn btn-lg btn-info"><Link to="/assignment/1"> Assignment 1</Link></button>
        <button type="button" class="m-2 btn btn-lg btn-dark"><Link to="/assignment/2"> Assignment 2</Link></button>
        <button type="button" class="m-2 btn btn-lg btn-primary"><Link to="/assignment/3"> Assignment 3</Link></button>
        <button type="button" class="m-2 btn btn-lg btn-info"><Link to="/assignment/4"> Assignment 4</Link></button>
        <button type="button" class="m-2 btn btn-lg btn-dark"><Link to="/assignment/5"> Assignment 5</Link></button>
        </div>
    </div>
  )
}

export default Home