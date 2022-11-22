import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  /* ¿Qué info se necesita? 4 variables de estado:
    1) Para guardar la búsqueda
    2) Para guardar la info del artista
    3) Para guardar la info de la canción
    4) Para controlar la visibilidad de la espera (Loader)

    El useEffect lo usaremos al trabajar con la API del ejercicio.
    */

  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data)
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      {loading && <Loader />}
      {/* solamente si loading es verdadero se va a mostrar */}
      
      <SongForm handleSearch={handleSearch}/>
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
      
    </div>
  );
};

export default SongSearch;
