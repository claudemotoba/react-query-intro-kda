import { useQuery } from 'react-query';
import axios from 'axios';

export default () => {
  return useQuery(
    ['users'],
    () =>
      axios
        .get('http://localhost:3001/api/students')
        .then((students) => students.data),
    {
      refetchOnWindowFocus: true,
      staleTime: 10000,
    }
  );
};
