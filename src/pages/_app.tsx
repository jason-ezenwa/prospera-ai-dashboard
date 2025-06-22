import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark">
      <Head>
        <title>
          Prospera AI - Turn B2B Inbound Leads into Customers with AI Agents
        </title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
