import useApi from '../hooks/useApi';
import Item from '../components/Item';
import { CLASSES } from '../utils/constants';
const Home = () => {
  const { data, isLoading, isError } = useApi(CLASSES);

  if (isLoading) {
    return <h1>I am Loading</h1>;
  }
  if (isError) {
    return <h1>An error occured</h1>;
  }

  return (
    <>
      <h2>From the API:</h2>
      {data.results.map((item, idx) => {
        return <Item key={idx} item={item} />;
      })}
    </>
  );
};

export default Home;
