import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './store/auth/authSlice';
import Class from './pages/Class';
import Home from './pages/Home';
import Favs from './pages/Favs';

const App = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/favs'>Favs</Link>
          </li>
        </ul>
        {auth ? (
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </button>
        ) : null}
      </nav>
      <Routes>
        {auth ? (
          <Route index element={<Home />} />
        ) : (
          <Route
            index
            element={
              <div>
                <h1>You are not logged in, please do so</h1>
                <button
                  onClick={() => {
                    dispatch(login({ pword: 'supersecure' }));
                  }}
                >
                  Login
                </button>
              </div>
            }
          />
        )}

        <Route path='/class/:id' element={<Class />} />
        <Route path='/favs' element={<Favs />} />
      </Routes>
    </>
  );
};

export default App;
