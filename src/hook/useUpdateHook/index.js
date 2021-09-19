import { useCallback, useState } from 'react';

// 组件重新渲染的hook

const useUpdateHook = () => {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
};

export default useUpdateHook;
