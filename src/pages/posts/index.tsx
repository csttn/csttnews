import Head from "next/head";

import styles from "./posts.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Csttnew</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time> 27 de junho de 2021</time>
            <strong>titulo do post </strong>
            <p>
              paragrafo do post Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus blanditiis officiis iste assumenda
              quia consequuntur cupiditate magni ipsa quos ipsam voluptatum at
              minus, illo quam! Eveniet sint culpa quam facilis.
            </p>
          </a>
          <a>
            <time> 27 de junho de 2021</time>
            <strong>titulo do post </strong>
            <p>
              paragrafo do post Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus blanditiis officiis iste assumenda
              quia consequuntur cupiditate magni ipsa quos ipsam voluptatum at
              minus, illo quam! Eveniet sint culpa quam facilis.
            </p>
          </a>
          <a>
            <time> 27 de junho de 2021</time>
            <strong>titulo do post </strong>
            <p>
              paragrafo do post Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus blanditiis officiis iste assumenda
              quia consequuntur cupiditate magni ipsa quos ipsam voluptatum at
              minus, illo quam! Eveniet sint culpa quam facilis.
            </p>
          </a>
          <a>
            <time> 27 de junho de 2021</time>
            <strong>titulo do post </strong>
            <p>
              paragrafo do post Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus blanditiis officiis iste assumenda
              quia consequuntur cupiditate magni ipsa quos ipsam voluptatum at
              minus, illo quam! Eveniet sint culpa quam facilis.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
