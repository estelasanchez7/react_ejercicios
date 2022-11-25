import React, { useState, useEffect } from "react";
/*no es necesario mandar a llamar a react porque como es un hook personalizado solo está devolviendo lógica*/

export const useFetch = (url) => {
  /*Necesario crear 3 variables de estado:
1) Para guardar la data de la API que estamos consultando
2) El error, en caso de que la petición fetch traiga un error
3) Almacene el estado de si se ha cargado o no la petición
*/

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
