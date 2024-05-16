import Transections from "@/app/ui/transictions/transictions";
import styles from "@/app/ui/dashboard/dashbaord.module.css"
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Transections />
      </div>
    </div>
  );
};

export default Dashboard;
