"use client";

import useSWR from "swr";
import Cards from "./components/Cards";
import BotaoPaginas from "./components/BotaoPaginas";
import { useState } from "react";

import textoBiografia from "./uitls/dataBase";
import fetcher from "./uitls/fetcher";

export default function Home() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const [nome, setNome] = useState("");
  const [anterior, setAnterior] = useState(1);

  const avancar_pagina = () => {
    if (anterior == data.info.pages) return;
    setAnterior(anterior + 1);
    setUrl(data.info.next);
  };

  const voltar_pagina = () => {
    if (anterior == 1) return;
    setAnterior(anterior - 1);
    setUrl(data.info.prev);
  };

  const pesquisar = () => {
    if (nome == "") return;
    const urlBase = "https://rickandmortyapi.com/api/character/?name=";
    setUrl(urlBase + nome);
    setNome("");
  };

  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error)
    return (
      <div className="m-auto w-full h-full text-white text-center">
        Fail to loadr
      </div>
    );
  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full h-full text-white">
        Loading...
      </div>
    );
  const { results } = data;

  return (
    <main>
      <div className="lg:w-[60%] xl:w-[50%] 2xl:w-[50%] md:w-[70%] m-auto p-2">
        <div className="w-full flex justify-center p-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="rounded-s-md pl-2 focus:outline-none"
            onChange={({ target }) => setNome(target.value)}
          />
          <button
            onClick={pesquisar}
            className="text-white bg-blue-700 p-2 font-semibold rounded-e-md"
          >
            Search
          </button>
        </div>
        <ul className="flex justify-center flex-wrap gap-2 ">
          {results.map((personagem: any) => (
            <Cards
              data={personagem}
              texto={textoBiografia}
              key={personagem.id}
            />
          ))}
        </ul>
        <BotaoPaginas
          paginaPrev={anterior}
          paginaTotal={data.info.pages}
          avancar={avancar_pagina}
          voltar={voltar_pagina}
        />
      </div>
    </main>
  );
}
