import React, { useContext } from 'react';

export const PageContext = React.createContext({
  toggleClick: (event: React.MouseEvent<Element, MouseEvent>) => {},
});

export const usePageContext = () => {
  const click = useContext(PageContext);

  return click;
};
