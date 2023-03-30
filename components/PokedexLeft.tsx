import styles from "@/styles/PokedexLeft.module.css"
import { useEffect, useState } from "react"
import pokeApi from "../services/pokeApi"

export default function PokedexLeft(props: any) {
    const { selectedPokemon } = props
    const [pokemonData, setPokemonData] = useState<any>([])
    const [habilities, setHabilities] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
    }, [pokemonData])

    useEffect(() => {
        async function getPokemons() {
            await pokeApi.get(`/pokemon/${selectedPokemon}`).then(response => {
                setPokemonData(response.data)
                setHabilities(response.data.stats)
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

                <img src="/visorH.png" alt="Visor de habilidades" className={styles.visorH}/>

                <div className={styles.habilities}>
                    <div className={styles.hability}>
                        <p>HP</p>
                        <p>{pokemonData.stats? pokemonData.stats[0].base_stat : ""}</p>
                    </div>
                    <div className={styles.hability}>
                        <p>ATTACK</p>
                        <p>{pokemonData.stats? pokemonData.stats[1].base_stat : ""}</p>
                    </div>
                    <div className={styles.hability}>
                        <p>DEFENSE</p>
                        <p>{pokemonData.stats? pokemonData.stats[2].base_stat : ""}</p>
                    </div>
                    <div className={styles.hability}>
                        <p>SPEED</p>
                        <p>{pokemonData.stats? pokemonData.stats[5].base_stat : ""}</p>
                    </div>
                </div>
            
            </>
            }
        </div>
    )
}