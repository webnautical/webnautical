import React, { Children } from 'react';
import { useState, createContext } from 'react';
import { useForm } from 'react-hook-form';

export const quoteContext = createContext();

function QuoteProvider({ children }) {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm({
    default: {
      service: '',
      budget: '',
      name: '',
      email: '',
      phone: '',
      // PhoneNo:'',
      whatsapp_number: ''
      // requirements:'',
    }
  });

  const value = { register, handleSubmit, errors, trigger };
  return <quoteContext.Provider value={value}>{children} </quoteContext.Provider>;
}

export default QuoteProvider;
