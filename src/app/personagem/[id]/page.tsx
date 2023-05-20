"use client";

import useSWR from "swr";
import fetcher from "@/app/uitls/fetcher";
import Image from "next/image";
import textoBiografiaCompleta from "@/app/uitls/dataBaseComplet";

export default function Personagem({ params }: { params: any }) {
  const baseUrl = "https://rickandmortyapi.com/api/character/" + params.id;
  const { data, error, isLoading } = useSWR(baseUrl, fetcher);
  if (error)
    return (
      <div className="flex justify-center items-center w-full h-full text-white text-center">
        Fail to loadr
      </div>
    );
  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full h-full text-white text-center">
        Loading...
      </div>
    );
  const { name, image, status, episode, origin, species, gender } = data;

  const estatus = () => {
    if (status == "Alive") {
      return { class: "bg-green-600" };
    } else if (status == "Unknown") {
      return { class: "bg-orange-400" };
    } else {
      return { class: "bg-neutral-800" };
    }
  };

  const mostrar_estatus = estatus();

  return (
    <main>
      <div
        className="flex items-center flex-col text-white
      md:flex-row md:items-start md:w-[80%] md:m-auto md:mt-5
      "
      >
        <div
          className={`flex flex-col justify-center items-center w-[290px] rounded-zxl bg-neutral-400 text-black font-medium hover:cursor-pointer  rounded-md mr-2 mt-2 ml-2`}
        >
          <div className="rounded-t-md overflow-hidden w-[290px]">
            <Image src={image} height={300} width={300} alt="Personagem" />
          </div>
          <ul>
            <li className="overflow-hidden text-ellipsis whitespace-nowrap">
              Name: <span className="font-semibold "> {name}</span>
            </li>
            <li className="flex items-center gap-2 h-8">
              <span>Status: {status} </span>
              <div
                className={`
              w-2
              h-2
              rounded-full
              ${mostrar_estatus.class}
              `}
              ></div>
            </li>
            <li>Present in {episode.length} episodes</li>
            <li>From: {origin.name}</li>
            <li>Specie: {species}</li>
            <li>Gender: {gender}</li>
          </ul>
        </div>
        <div className="bg-neutral-400 mt-2 w-[70%] m-auto text-black rounded-md p-3">
          <h1 className="text-center text-xl font-semibol">Bibliography</h1>
          {textoBiografiaCompleta.map((n, index) => (
            <p key={index} className=" p-2 text-justify">
              {n}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
