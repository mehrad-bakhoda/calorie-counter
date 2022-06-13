import styles from "../styles/Home.module.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (search) {
      setLoading(true);
      fetch(`https://api.github.com/search/repositories?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.items);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [search]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Calorie Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <FontAwesomeIcon icon={faSearch} /> Calorie Counter
        </h1>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search for a food"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ul className={styles.results}>
            {results.map((result) => (
              <li key={result.id}>
                <a href={result.html_url}>{result.full_name}</a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
