import styles from "../styles/Home.module.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calorie Counter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Calorie Counter" key="title" />
      </Head>
      <div className={styles.card}>
        <input />
        <FontAwesomeIcon
          icon={faSearch}
          style={{ fontSize: 30, color: "gray" }}
        />
      </div>
    </div>
  );
}
