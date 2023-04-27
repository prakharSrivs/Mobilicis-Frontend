import React, { useEffect,useMemo,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Data.css'
function Data(props) {
  const {id} = useParams()
  const [resultData, setResultData] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      axios.get('https://mobilicisassignmentbackend-536c.onrender.com/assignment/'+id)
      .then(function (response) {
        setResultData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {

      });
    }
    fetchData()
  },[])
  if(resultData.length==0)
  return (
      <div id='preloader'>
      Downloading Data
      <div className='spinner'>
        <span className='ball-1'></span>
        <span className='ball-2'></span>
        <span className='ball-3'></span>
        <span className='ball-4'></span>
        <span className='ball-5'></span>
        <span className='ball-6'></span>
        <span className='ball-7'></span>
        <span className='ball-8'></span>
      </div>
      </div>
  )
  return (
    <div>
    <table className="table table-striped table-dark">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">FirstName</th>
        <th scope="col">LastName</th>
        <th scope="col">Email</th>
        <th scope="col">Gender</th>
        <th scope="col">Income</th>
        <th scope="col">City</th>
        <th scope="col">Car</th>
        <th scope="col">Quote</th>
        <th scope="col">Phone Price</th>
        </tr>
    </thead>
    <tbody>
    {
      resultData.map((data,index)=>{ 
        return (
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{data.first_name}</td>
        <td>{data.last_name}</td>
        <td>{data.email}</td>
        <td>{data.gender}</td>
        <td>{data.income}</td>
        <td>{data.city}</td>
        <td>{data.car}</td>
        <td>{data.quote}</td>
        <td>{data.phone_price}</td>
        </tr>
        )
      })
    }

    </tbody>
    </table>
    </div>
  )
}

export default Data