
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchApiData } = useGif();

  return (
    <div className="min-h- flex flex-col gap-y-5 mt-[15px] bg-green-700 w-1/2 rounded-lg border border-black items-center">
      <h1 className="text-2xl underline mt-1 font-bold mb-4 ">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width={450} />}
      <button
        className="mb-6 mt-6 hover:bg-gray-200 w-10/12 transition-all duration-100 bg-yellow-500 font-fold text-xl  py-2 rounded-md"
        onClick={() => fetchApiData()}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
