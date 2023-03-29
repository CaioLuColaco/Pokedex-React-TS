import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import PokedexLeft from '../../components/PokedexLeft'
import PokedexRight from '../../components/PokedexRight'
import { useState } from 'react'

export default function Home() {
  const [pokemonName, SetPokemonName] = useState("")


  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by Pokedex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <PokedexLeft pokemon={pokemonName}/>
          <PokedexRight/>
      </main>
    </>
  )
}
