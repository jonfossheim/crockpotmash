import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { CLASSES } from '../utils/constants';
import useLocalStorage from '../hooks/useLocalStorage';

const Class = () => {
  const { id } = useParams();
  const [favs, setFavs] = useLocalStorage('favs', []);
  const { data, isLoading, isError } = useApi(CLASSES + id);
  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  const addToFavs = (item) => {
    setFavs([...favs, item]);
  };

  return (
    <div>
      <h1>{data.name}</h1>
      <button
        onClick={() => {
          addToFavs(data);
        }}
      >
        add to fav
      </button>
    </div>
  );
};

export default Class;
