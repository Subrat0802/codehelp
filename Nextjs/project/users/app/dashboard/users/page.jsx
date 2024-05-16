import React from "react";
import Image from "next/image";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "../../lib/action";

const page = async () => {
  const users = await fetchUsers();
  console.log("users", users);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((el, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.userImage}
                    src="/download.png"
                    width={20}
                    height={20}
                    alt="user"
                  />
                  {el.userName}
                </div>
              </td>
              <td>{el.email}</td>
              <td>{el.createdAt?.toString().slice(4, 16)}</td>
              <td>{el.isAdmin ? "Admin" : "Not Admin"}</td>
              <td>{el.isActive ? "online" : "offline"}</td>
              <td>
                <Link href={`/dashboard/users/${el.id}`}>
                  <button className={styles.view}>View</button>
                </Link>
                <form action={deleteUser}>
                  <input  type="hidden" name="id" value={el.id}/>
                  <button className={styles.delete}>Delete</button>
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
