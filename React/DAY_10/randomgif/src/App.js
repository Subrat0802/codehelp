import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className="relative w-full  flex flex-col background items-center">
    <h1 className=" bg-white w-11/12 text-center rounded-md mt-[40px] 
    px-10 py-2 text-4xl font-bold ">Random GIFS</h1>
    <div className="flex flex-col w-full items-center mt-[30px]">
      <Random />
      <Tag />
    </div>
  </div>
  );
}
