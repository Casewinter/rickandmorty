import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  data: {
    id: number;
    name: string;
    status: string;
    image: string;
  };
  texto: string;
}

const Cards = (props: Props) => {
  const { push } = useRouter();
  const { data } = props;
  const { name, status, image, id } = data;
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

  const handler = () => {
    push(`/personagem/${id}`);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center w-[250px] rounded-zxl bg-neutral-400 text-black font-medium hover:cursor-pointer  overflow-hidden rounded-md`}
    >
      <div className="rounded-t-lg w-[250px] overflow-hidden">
        <img src={image} height={250} width={250} alt="personagem" />
      </div>
      <div className="w-[200px] mt-2">
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
          <li className="overflow-hidden text-ellipsis whitespace-nowrap text-neutral-800 text-sm">
            {props.texto}
          </li>
        </ul>
      </div>
      <button
        onClick={handler}
        className="w-full bg-blue-700 p-2 font-semibold"
      >
        See more
      </button>
    </div>
  );
};

export default Cards;
