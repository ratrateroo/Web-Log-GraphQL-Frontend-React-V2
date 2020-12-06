import { useLocation } from 'react-router-dom';

export const makeQuery = () => {
   return new URLSearchParams(useLocation().search());
};
