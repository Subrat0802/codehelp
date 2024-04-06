
import Product from "@/app/product/product"

async function fetchData() {
  let response = await fetch("https://dummyjson.com/products/");
  let json = await response.json();
  return json.products;
}

const page = async () => {
  const products = await fetchData();

  return (
    <div>
      <h1>Server side rendering</h1>
      {products.map((el) => (
        <div>
          <p>{el.title}</p>
          <Product price={el.price}/>
        </div>
      ))}
    </div>
  );
};

export default page;
