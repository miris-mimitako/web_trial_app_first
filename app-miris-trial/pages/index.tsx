import Link from 'next/link'
import Head from 'next/head'

import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function HomePage () {
  return (
      <>

        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <p className="title">
            Read {' '}
            <Link href="/posts/first-post"> 
              <a>this page!</a>
            </Link>
          </p>
        </header>
      </>
    )
  
}

export default HomePage;

// learn:
// Link uses Link tag not use a tag. An a tag indicates link word.