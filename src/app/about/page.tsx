import Link from "next/link";
import Perfil from "../components/Perfil";
async function getData() {
  const res = await fetch("https://api.github.com/users/casewinter");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const About = async () => {
  const data = await getData();
  return (
    <main className="flex md:flex-row items-center justify-start flex-col md:items-start md:justify-center gap-2 h-[85%]">
      <Perfil data={data} />
      <div className="bg-neutral-400 w-[300px] rounded-md  p-3">
        <h1 className="font-black text-2xl">About Techs</h1>
        <p>Hello, here I&apos;ll tell about techs used in this project</p>
        <ul className="m-auto w-[80%] list-disc font-semibold">
          <li className="">NextJS 13 - App folder + TS</li>
          <li>SWR for fetch client-side</li>
          <li>Tailwind CSS</li>
          <li>
            <Link href={"https://rickandmortyapi.com/documentation/"}>
              Rick And Morty API
            </Link>
          </li>
          <li>GitHub API</li>
        </ul>
      </div>
    </main>
  );
};

export default About;
