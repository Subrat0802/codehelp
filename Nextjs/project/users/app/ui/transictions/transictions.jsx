import React from "react";
import Image from "next/image";
import styles from "@/app/ui/transictions/transictions.module.css";

const Transections = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Transections</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image className={styles.userImage} src="/download.png" alt="" width={40} height={40} />
                Joghn cena
              </div>
            </td>
            <td>
              <span className={`${styles.pending} ${styles.status}`}>Pending</span>
            </td>
            <td>
              <span>14.02.2024</span>
            </td>
            <td>
              <span>$99</span>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image className={styles.userImage} src="/download.png" alt="" width={40} height={40} />
                Joghn cena
              </div>
            </td>
            <td>
              <span  className={`${styles.pending} ${styles.status}`}>Pending</span>
            </td>
            <td>
              <span>14.02.2024</span>
            </td>
            <td>
              <span>$99</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image className={styles.userImage}  src="/download.png" alt="" width={40} height={40} />
                Joghn cena
              </div>
            </td>
            <td>
              <span  className={`${styles.cancel} ${styles.status}`}>Cancelled</span>
            </td>
            <td>
              <span>14.02.2024</span>
            </td>
            <td>
              <span>$99</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image className={styles.userImage} src="/download.png" alt="" width={40} height={40} />
                Joghn cena
              </div>
            </td>
            <td>
              <span  className={`${styles.pending} ${styles.status}`}>Pending</span>
            </td>
            <td>
              <span>14.02.2024</span>
            </td>
            <td>
              <span>$99</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image className={styles.userImage} src="/download.png" alt="" width={40} height={40} />
                Joghn cena
              </div>
            </td>
            <td>
              <span  className={`${styles.done} ${styles.status}`}>Done</span>
            </td>
            <td>
              <span>14.02.2024</span>
            </td>
            <td>
              <span>$99</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transections;
