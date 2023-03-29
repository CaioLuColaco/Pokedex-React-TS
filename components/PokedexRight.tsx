import pokeApi from "../services/pokeApi"
import styles from "@/styles/PokedexRight.module.css"
import { useEffect, useState } from "react"

export default function PokedexRight(props: any) {
    // const pokemons = useState([])
    // useEffect(() => {

    // },[])



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
                    <div className={styles.card}>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/30.gif" alt="" />
                        <p>Pikachu</p>
                    </div>
                    
                </div>
                
                <div className={styles.pokemonsButtons}>
                    <button><span className="material-symbols-outlined">first_page</span></button>
                    <button><span className="material-symbols-outlined">chevron_left</span></button>
                    <button><span className="material-symbols-outlined">chevron_right</span></button>
                    <button><span className="material-symbols-outlined">last_page</span></button>
                </div>
            </div>
        </div>
    )
}