import { useState, useEffect } from "react";
import "./App.css";
import Gifs from "./Gifs";
import Header from "./Header";
import Search from "./Search";

export default function App() {
  const [gifs, SetGifs] = useState([]);
  const [buscar, buscarGifs] = useState(false);
  const [cargaInicial, setCargaInicial] = useState(false);
  const [isDark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarAC, setMostrarAC] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (buscar) {
      let peticion = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=HtOUpRZDcmXvVqvEaGJaNMNJlk1kaGxP&q=${search}&limit=15&offset=0&rating=g&lang=en`
      );
      setLoading(true);
      peticion
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((resp) => {
          SetGifs([]);
          SetGifs(resp.data);
          setLoading(false);
          setSearch("");
          buscarGifs(false);
          setCargaInicial(true);
        });
    }
  }, [buscar]);

  useEffect(() => {
    if (search) {
      setMostrarAC(true);
    } else {
      setMostrarAC(false);
    }
    let peticion = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=ORUvHzMJUGPFdV2kpkG8zMrjgFs9BnKL&q=${search}&limit=5&offset=0&rating=g&lang=en`
    );

    peticion
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSugerencias(res.data);
      });
  }, [search]);

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <Header isDark={isDark} setDark={setDark} />
      <Search
        isDark={isDark}
        search={search}
        SetGifs={SetGifs}
        setSearch={setSearch}
        buscarGifs={buscarGifs}
        mostrarAC={mostrarAC}
        sugerencias={sugerencias}
        setCargaInicial={setCargaInicial}
      />
      <Gifs gifs={gifs} cargaInicial={cargaInicial} loading={loading} />
    </div>
  );
}
