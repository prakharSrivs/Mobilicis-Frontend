import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container'>
        <div className="allButtons">
        <Link to="/assignment/0"><button type="button" class="m-2 btn btn-lg btn-primary">All Data</button></Link>
        <Link to="/assignment/1"><button type="button" class="m-2 btn btn-lg btn-info"> Assignment Answer 1</button></Link>
        <Link to="/assignment/2"><button type="button" class="m-2 btn btn-lg btn-dark"> Assignment Answer 2</button></Link>
        <Link to="/assignment/3"><button type="button" class="m-2 btn btn-lg btn-primary"> Assignment Answer 3</button></Link>
        <Link to="/assignment/4"><button type="button" class="m-2 btn btn-lg btn-info"> Assignment Answer 4</button></Link>
        <Link to="/assignment/5"><button type="button" class="m-2 btn btn-lg btn-dark"> Assignment Answer 5</button></Link>
        </div>
    </div>
  )
}

export default Home