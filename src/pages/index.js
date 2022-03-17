import Head from "next/head";
import App from "containers/App";

import Footer from "components/Footer";
import classes from "styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Memory Game!</title>
        <meta name="description" content="Memory Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>

      <Footer />
    </div>
  );
}
