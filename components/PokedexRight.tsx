import styles from "@/styles/PokedexRight.module.css"

export default function PokedexRight(props: any) {

    return (
        <div className={styles.rightSide}>
            <img src="/pokedexRight.png" alt="Parte 2 do pokedex" className={styles.imgPokedex}/>

            <div className={styles.contentBox}>
                <div className={styles.searchBox}>
                    <input type="text" />
                    <button>search</button>
                </div>

                <div className={styles.pokemonsBox}>
                    <div className={styles.cards}>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/649.gif" alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}