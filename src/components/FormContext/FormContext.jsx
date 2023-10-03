// FormContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export function FormProvider({ children }) {
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showSecondForm, setShowSecondForm] = useState(false);

  useEffect(() => {
    const storedFormState = JSON.parse(localStorage.getItem('formState'));
    if (storedFormState) {
      setShowFirstForm(storedFormState.showFirstForm);
      setShowSecondForm(storedFormState.showSecondForm);
    }
  }, []);

  useEffect(() => {
    const formState = { showFirstForm, showSecondForm };
    localStorage.setItem('formState', JSON.stringify(formState));
  }, [showFirstForm, showSecondForm]);

  return (
    <FormContext.Provider value={{ showFirstForm, showSecondForm, setShowFirstForm, setShowSecondForm }}>
      {children}
    </FormContext.Provider>
  );
}
