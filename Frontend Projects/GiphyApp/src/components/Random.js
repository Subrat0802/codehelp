import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Random = () => {

  const { gifData, loading, fetchData } = useGif();

  return loading ? (
    <Spinner className="flex justify-center items-center " />
  ) : (
    <div className="flex flex-col items-center ">
      <img src={gifData} />
      <button
        onClick={fetchData}
        className="bg-purple-500 text-white text-2xl font-semibold px-5 py-3 rounded-lg mt-6"
      >
        Random GIF
      </button>
    </div>
  );
};

export default Random;
