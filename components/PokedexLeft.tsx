import styles from "@/styles/PokedexLeft.module.css"

export default function PokedexLeft(props: any) {

    return (
        <div className={styles.leftSide}>
            <img src="/pokedexLeft.png" alt="Parte 1 do pokedex" className={styles.imgPokedex}/>
        </div>
    )
}