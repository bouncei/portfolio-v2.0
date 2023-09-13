import { RiRadioButtonFill } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import dummyData from "../../dummy";
import { BsLink45Deg } from "react-icons/bs";
import Head from "next/head";

// const findProj = dummyData.find((element) => element.id === name.toLowerCase());

// export const metadata = {
//   title: findProj.name,
//   description: findProj.overwiew,
// };

const Project = ({ name }) => {
  const found = dummyData.find((element) => element.id === name.toLowerCase());

  return (
    <div>
      <Head>
        <title>{found.name}</title>
        <meta name="description" content={found.overwiew} />
      </Head>

      <div className="w-full pt-18">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={found?.Img}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] dura w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 font-serif text-[#fb5858]">
              {found?.name.toLocaleUpperCase()}
            </h2>
            <div className="flex items-center text-sm md:text-base 2xl:text-lg">
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
            <p className=" text-sm md:text-base 2xl:text-lg">
              {found?.overwiew}
            </p>
            <div className="flex items-center text-white  justify-end md:justify-start gap-2 ">
              {found.repo && (
                <a href={found?.repo} target="_blank" rel="noreferrer">
                  <button className="px-4 py-1 mt-4 font-medium flex items-center gap-2 rounded-lg bg-[#fb5858]   text-sm md:text-base 2xl:text-lg cursor-pointer  hover:opacity-70">
                    <BsCodeSlash /> Code
                  </button>
                </a>
              )}

              {found?.demo && (
                <a href={found?.demo} target="_blank" rel="noreferrer">
                  <button className="px-4 py-1 mt-4 font-medium flex items-center gap-2 rounded-lg bg-[#fb5858] text-sm md:text-base 2xl:text-lg  cursor-pointer  hover:opacity-70">
                    <BsLink45Deg /> <p>Demo</p>
                  </button>
                </a>
              )}
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {found?.technologies.map((item, index) => (
                  <p
                    key={index}
                    className="text-gray-600 text-sm md:text-base 2xl:text-lg py-2 flex items-center"
                  >
                    <RiRadioButtonFill className="pr-1" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <button className=" text-white px-4 py-1 rounded-lg bg-[#fb5858] font-medium cursor-pointer  hover:opacity-70 flex items-center justify-center gap-2">
              <IoIosArrowRoundBack />
              Back
            </button>
          </Link>
        </div>
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
