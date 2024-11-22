import { useRouter } from "next/router";
import Card from "../module/Card";

import Back from "../icons/Back";

import styles from "./CarsList.module.css";

function CarsList({ data }) {
  const router = useRouter();

  return (
    <div className={styles.container} onClick={() => router.back()}>
      <div className={styles.back}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
