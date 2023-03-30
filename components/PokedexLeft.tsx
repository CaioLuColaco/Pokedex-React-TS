import styles from "@/styles/PokedexLeft.module.css"
import { useEffect, useState } from "react"
import pokeApi from "../services/pokeApi"

export default function PokedexLeft(props: any) {
    const { selectedPokemon } = props
    const [pokemonData, setPokemonData] = useState<any>([])

    useEffect(() => {
        async function getPokemons() {
            await pokeApi.get(`/pokemon/${selectedPokemon}`).then(response => {
                setPokemonData(response.data)
            })
        }

        getPokemons()
    }, [selectedPokemon])

    return (
        <div className={styles.leftSide}>
            <img src="/pokedexLeft.png" alt="Parte 1 do pokedex" className={styles.imgPokedex}/>
            <h3 className={styles.pokemonName}>{`${pokemonData.length>0? pokemonData.id : ""} - ${selectedPokemon}`}</h3>
        </div>
    )
}