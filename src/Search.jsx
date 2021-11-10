import React from "react";
import "./App.css";

const Search = ({
  isDark,
  search,
  SetGifs,
  setSearch,
  buscarGifs,
  mostrarAC,
  sugerencias,
  setCargaInicial
}) => {
  let actualizaSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    buscarGifs(true);
    if (search === "") {
      setCargaInicial(false);
      buscarGifs(false);
      SetGifs([]);
    }
  };
  const sugerenciaHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.innerText);
    handleSearch(e);
  };

  return (
    <div className={`filtros ${isDark ? "dark" : "light"}`}>
      <p className="text-white">
        ¡Inspirate y busca los mejores<span className="bold">GIFS!</span>
      </p>
      <img src="./Assets/ilustracion-header.svg" alt="logo" className="logo" />
      <div className="button-search">
        <input
          type="text"
          className="search-gifts"
          onChange={actualizaSearch}
          value={search}
          placeholder="Busca Gifs"
        />
        {mostrarAC ? (
          <div className="autocomplete">
            {sugerencias.map((sugerencia) => {
              return <p onClick={sugerenciaHandler}>{sugerencia.name}</p>;
            })}
          </div>
        ) : null}

        <button className="appear" onClick={handleSearch}>
          <img src="./Assets/icon-search-mod-noc.svg" alt="buscar" />
        </button>
      </div>
    </div>
  );
};

export default Search;
