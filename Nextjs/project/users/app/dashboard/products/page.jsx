import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/products/products.module.css";
import { fetchProducts } from "../../lib/data";
import { deleteProduct } from "../../lib/action";

const page = async () => {
  const products = await fetchProducts();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/products/add">
          <div className={styles.addButton}>Add new</div>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((el) => (
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    className={styles.productImage}
                    src="/download.png"
                    width={20}
                    height={20}
                    alt="user"
                  />
                  {el.title}
                </div>
              </td>
              <td>{el.desc}</td>
              <td>{el.price}</td>
              <td>{el.createdAt?.toString().slice(4, 16)}</td>
              <td>{el.stock}</td>
              <td>
                <Link href={`/dashboard/products/${el.id}`}>
                  <button className={styles.view}>View</button>
                </Link>

                <form action={deleteProduct}>
                  <input  type="hidden" name="id" value={el.id}/>
                    <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
