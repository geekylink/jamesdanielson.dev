import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import Image from "next/image";

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>James Danielson - Home</title>
        <meta name="description" content="James Danielson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.header}>
            <strong className={styles.headerlabel}>James Danielson&nbsp;</strong>
            <Image 
              width="0"
              height="0"
              sizes="10vw"
              className={styles.avatar} 
              src="/james.jpeg" 
              alt="James Danielson" 
            />
        </div>

        <div className={styles.textsection}>
          <p className={styles.text}>
		        James Danielson Development - I am a software developer with over
            ten years of experience. I've worked in a wide variety of fields 
            from fintech to cyber security, and I like to make games sometimes. 
          </p>
        </div>

        <div className={styles.grid}>
          <Link
            href="https://jamesdanielson.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              James Danielson <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Explore my portfolio at jamesdanielson.com
            </p>
          </Link>

          <Link
            href="https://github.com/geekylink/jamesdanielson.dev"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              This Site&apos;s Git <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              View the code for jamesdanielson.dev here.
            </p>
          </Link>

          <Link
            href="https://www.linkedin.com/in/james-danielson-33aba264/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Want to reach out? - Send me a message on LinkedIn.
            </p>
          </Link>

          <Link
            href="https://jamesdanielson.com/Resume.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Résumé <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out my Résumé here.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
