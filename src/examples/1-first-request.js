import { useEffect } from 'react';
import axios from "axios"

const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {

  const fetchData = async ()=>{
    try {
      const response = await axios(url)
      console.log(response.data)
      
    } catch (error) {
      console.log(error.response)
      
    }
  }
  useEffect(() => {
   fetchData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
