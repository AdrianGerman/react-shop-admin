import { useState } from 'react';

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    autoClose: true,
    message: '',
    type: 'success',
  };
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });
  const toggleAlert = () => {
    setAlert(!alert.active);
  };
  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
