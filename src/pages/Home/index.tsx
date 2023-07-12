import menu from 'data/Menu.json'
import styles from './inicio.module.scss'
import stylesTheme from 'styles/theme.module.scss'


export default function Home(){
   
    let chefRecomendations = [...menu]
    chefRecomendations = chefRecomendations.sort(() => 0.5 - Math.random()).splice(0,3)
    return(
        <section>
            <h3 className={stylesTheme.title}>
                Recomenções da cozinha
            </h3>
            <div className={styles.recommendation}>
                {chefRecomendations.map(item => (
                    <div key={item.id} className={styles.recomended}>
                        <div className={styles.recomended__image}>
                            <img src={item.photo} alt={item.title}/>
                            <button className={styles.recomended__button}>
                                See more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )   
}