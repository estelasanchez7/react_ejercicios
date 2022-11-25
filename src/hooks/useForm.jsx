import React, { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {};
  const handleBlur = (e) => {};
  const handleSubmit = (e) => {};

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

/*
-handleChange:detecta cuando estamos escribiendo y el cambio de los valores.
-handleBlur: donde vamos a hacer las validaciones
-handleSubmit: envío
 */
