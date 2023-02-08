import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
  return (
    <>
      <ToastContainer />
      <Toaster />
    </>
  );
};

const showToast = (message, type) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    default:
      toast(message);
      break;
  }
};

export { Toaster, showToast };