import { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductdata() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductdata();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={posts.id} post={post} />
          ))}
        </div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Home;
