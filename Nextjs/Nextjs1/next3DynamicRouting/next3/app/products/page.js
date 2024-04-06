import Product from "../components/Product";
import ProductButton from "../components/ProductButton";

async function getProducts() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=10&select=title,price"
  );
  const json = await res.json();
  return json.products;
}

const Products = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 &&
        products.map(({ id, title, price }) => {
          return (
            <>
              <Product key={id} title={title} price={price} />
              <ProductButton key={id} id={id}/>
            </>
          );
        })}
    </div>
  );
};

export default Products;
