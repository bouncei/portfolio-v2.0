import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import dummyData from "../../dummy";

const Project = ({ name }) => {
  const found = dummyData.find((element) => element.id === name.toLowerCase());

  console.log("current Id", found);

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={found?.Img}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{found?.name.toLocaleUpperCase()}</h2>
          <div className="flex items-center">
            {found?.stack.map((item, index) =>
              index === found.stack.length - 1 ? (
                <h3 key={index}>{item} </h3>
              ) : (
                <h3 key={index}>{item + " /"} </h3>
              )
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <br />
          <p>{found?.overwiew}</p>
          <a href={found?.repo} target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href={found?.demo} target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {found?.technologies.map((item, index) => (
                <p key={index} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const name = context.params.projectId;

  return {
    props: {
      name,
    },
  };
}
export default Project;
