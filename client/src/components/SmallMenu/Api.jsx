
import axios from 'axios';

export const getTopRatedBooks = async () => {
  try {
    const response = await axios.get('/books/top-rated');
    return response.data;
    console.log(data);
    if (Array.isArray(data)) {
      return data;
    } else {
      console.error('Fetched data is not an array:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching top rated books:', error);
    return [];
  }
};
