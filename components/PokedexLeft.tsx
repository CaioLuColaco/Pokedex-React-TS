import styles from "@/styles/PokedexLeft.module.css"
import { useEffect, useState } from "react"
import pokeApi from "../services/pokeApi"

export default function PokedexLeft(props: any) {
    const { selectedPokemon } = props
    const [pokemonData, setPokemonData] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        // console.log(pokemonData.types[0].type.name)
    }, [pokemonData])

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
            {isLoading && 
            <>
                <h3 className={styles.pokemonName}>{`${pokemonData.id==undefined? "" : pokemonData.id + " - "}${selectedPokemon}`}</h3>
                
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData.id}.gif`} alt="" className={styles.pokemonImg}/>
            
            </>
            }
        </div>
    )
}