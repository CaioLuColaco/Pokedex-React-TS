import pokeApi from "../services/pokeApi"
import styles from "@/styles/PokedexRight.module.css"
import React, { useEffect, useState } from "react"

export default function PokedexRight(props: any) {
    const [pokemons, setPokemons] = useState<any>([])
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getPokemons() {
            let allPokemons = []
            await pokeApi.get(`/pokemon?limit=9&offset=${currentPage*9}`).then(response => {
                allPokemons = response.data.results
                for(var i = 0; i < allPokemons.length; i++) {
                    allPokemons[i].id = (i+1) + 9*currentPage
                }
                setPokemons(response.data.results)
            })
        }

        getPokemons()
        
    }, [currentPage])

    useEffect(() => {
        setIsLoading(true)
    }, [pokemons])

    return (
        <div className={styles.rightSide}>
            <img src="/pokedexRight.png" alt="Parte 2 do pokedex" className={styles.imgPokedex}/>

            <img src="/visorRight.png" alt="visor pokemons" className={styles.imgVisor}/>

            <div className={styles.contentBox}>
                <div className={styles.searchBox}>
                    <input type="text" />
                    <button>search</button>
                </div>

                <div className={styles.pokemonsBox}>

                    {isLoading && pokemons.map((pokemon: any) => {
                        return (
                            <div className={styles.card} key={pokemon.name}>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} alt="" />
                                <p>{pokemon.name}</p>
                            </div>
                        )
                    })
                    }
                </div>
                
                <div className={styles.pokemonsButtons}>
                    <button onClick={() => setCurrentPage(0)}><span className="material-symbols-outlined">first_page</span></button>
                    <button onClick={() => currentPage>0? setCurrentPage(currentPage-1) : ""}><span className="material-symbols-outlined">chevron_left</span></button>
                    <button onClick={() => currentPage<577? setCurrentPage(currentPage+1) : ""}><span className="material-symbols-outlined">chevron_right</span></button>
                    <button onClick={() => setCurrentPage(72)}><span className="material-symbols-outlined">last_page</span></button>
                </div>
            </div>
        </div>
    )
}