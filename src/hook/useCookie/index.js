import { useCallback, useState } from 'react';
import Cookies from 'js-cookie';

const useCookie = (cookieName, newValue, options) => {
  const [value, setValue] = useState(
    () => Cookies.get(cookieName)
  );

  const updateCookie = useCallback((newValue, options) => {
      Cookies.set(cookieName, newValue, options);
      setValue(newValue);
    },
    [cookieName]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(cookieName);
    setValue(null);
  }, [cookieName]);

  return [value, updateCookie, deleteCookie];
};

export default useCookie;
