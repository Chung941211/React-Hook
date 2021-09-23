import { useRef, useMemo } from 'react';

// 防抖hook
const useAntiShake = (fn, args = {
  time: 1000
}) => {

  const fnRef = useRef(fn);
  const { time } = args;
  fnRef.current = fn;

  const shake = useMemo(() => fnRef.current(...args), time, args, ), []);

  return {
    fn: shake
  };
}

export default useAntiShake;
