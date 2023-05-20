import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    avatar_url: string;
    name: string;
    location: string;
    public_repos: number;
    html_url: string;
  };
}

const Perfil = (props: Props) => {
  const { data } = props;
  return (
    <div
      className={`w-[250px] rounded-zxl bg-neutral-400 text-black font-medium rounded-md`}
    >
      <div
        className={`flex flex-col items-center p-2 justify-center  w-[250px] rounded-zxl bg-neutral-400 text-black font-medium  overflow-hidden rounded-md`}
      >
        <div className=" w-[180px] overflow-hidden rounded-full">
          <img
            src={data.avatar_url}
            height={200}
            width={200}
            alt="Proile photo"
          />
        </div>
        <div className="w-[200px] mt-2">
          <ul className="text-sm">
            <li>
              Name: <span className="font-semibold"> {data.name}</span>
            </li>
            <li>
              Location: <span className="font-semibold"> {data.location}</span>
            </li>
            <li>
              Public Repos:
              <span className="font-semibold"> {data.public_repos}</span>
            </li>
            <li className="font-semibold hover:cursor-pointer">
              <Link href={data.html_url}>Profile link</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
