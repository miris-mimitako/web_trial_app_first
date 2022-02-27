import Link from 'next/link'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function HomePage () {
  return (
      <>
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