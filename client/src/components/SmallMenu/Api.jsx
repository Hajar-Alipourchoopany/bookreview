import axios from 'axios';
import Rect, { useState} from "react";

export const getBooksByEditionCount = async () => {
  const [count, setCount] = useState(null);
  try {
    const { data } = await axios.get('http://localhost:8000/books');
    console.log(data);
    setCount (data);
    return data;
  } catch (error) {
    console.error('Error fetching books by edition count:', error);
    throw error;
  }
};
