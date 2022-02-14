import { useMemo } from 'react';

export const useSort = (data, prop, asce) => {
  const sortedData = useMemo(() => {
    return data?.slice(0).sort((a, b) => {
      if (asce) {
        return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
      } else {
        return a[prop] < b[prop] ? 1 : a[prop] > b[prop] ? -1 : 0;
      }
    });
  }, [data, asce, prop]);

  return sortedData;
};
