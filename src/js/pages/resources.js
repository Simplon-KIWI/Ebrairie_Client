import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import api from '../../utils/api';

const Resources = () => {
  // const resources = useSelector(state => state.resource)
  const [allResources, setAllResources] = useState([])
  
  const getResources = async () => {
    const allResources = await api.get('/resources');
    setAllResources(allResources.data)
  }

  const handleChange = (event) => {
    const value = event.target.value
    if (value){
      const filteredAllresource = allResources.filter((resource) => resource.title.includes(value))
      setAllResources(filteredAllresource);
    } else {
      getResources()
    }
    
  }

  useEffect (() => {
    getResources();
  }, [])


  return (
    <div>
      <h1>Resources page !</h1>
      <label>Search Resources</label>
      <input onChange={handleChange}type="text"></input>
      {
        allResources.map((resource)=>{
          return resource.title
        })
      }
    </div>
  );
};

export default Resources;
