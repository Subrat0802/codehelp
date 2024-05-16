import Sidebar from "@/app/ui/sidebar/sidebar";
import styles from "@/app/ui/dashboard/dashbaord.module.css";
import Navbar from "@/app/ui/navbar/navbar";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
