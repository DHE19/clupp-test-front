import type { NextPage } from 'next'
import Vehicles from '../components/home/vehiclesContainer'
import Navbar from '../components/navbar'
import MetaHead from '../components/metaHead'
import { useEffect, useState } from 'react'
import SearchBar from '../components/home/searchBar'
import axios from 'axios'


const Home: NextPage = () => {
  const [data, setData] = useState<IVehicle []| null>(null);
  
  useEffect(() => {     
    axios.get('http://localhost:3001/vehicle')
    .then(response => response.data)
    .then(data => setData(data))
    .catch(error => console.error(error));
  }, []);
  
  return (
   <>
    <MetaHead title='Clipp - Vehicles'/>
    <div className='container mx-auto px-2'>
      <Navbar/>
      <SearchBar />
      {data ? <Vehicles data={data}/> : null}
    </div>
  </>
  )
}

export default Home
