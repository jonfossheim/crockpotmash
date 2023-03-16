import { useCallback, useState } from 'react';

// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);
  /*
    On the initial render, 
    useCallback returns the function you have passed.

    During subsequent renders, 
    it will either return an already stored function
    from the last render (if the dependencies haven’t changed), 
    or return the fn function you have passed during this render.
  */

  return [state, toggle];
};

export default useToggle;
