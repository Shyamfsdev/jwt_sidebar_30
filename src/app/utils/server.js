import { useEffect, useState } from 'react';

const useServer = (fn) => {
  const [serverFn, setServerFn] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setServerFn(fn);
    }
  }, [fn]);

  return serverFn;
};

export default useServer;