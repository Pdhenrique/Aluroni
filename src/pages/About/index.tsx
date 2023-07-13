import styles from './About.module.scss'
import stylesTheme from 'styles/theme.module.scss'
import casaAluroni from 'assets/casa.png'
import massa1 from 'assets/massa1.png'
import massa2 from 'assets/massa2.png'

export default function About() {
    
    const images = [massa1, massa2]

    return(
        <section>
            <h3 className={stylesTheme.title}>About us</h3>
            <div className={styles.AboutUs}>
                <img src={casaAluroni} alt="Aluroni houses" />
                <div className={styles.AboutUs__text}>
                    <p>
                We at Aluroni offer you, our dear customers, the tastiest and most sophisticated Homemade Italian Pasta in São Paulo! We value the traditional ingredients of Italian cuisine, fresh and of excellent quality so that your experience is even more intense!
                    </p>
                    <p>
                We also have a meat menu with many options according to your taste!
                    </p>
                    <p>
                To accompany the Italian pasta, Aluroni has a reserve of special wines, which harmonize perfectly with your delivery, be it meat or pasta!
                    </p>
                </div>
               
            </div>
            <div className={styles.images}>
                {images.map((image, index) => (
                    <div key={index} className={styles.images__image}>
                        <img src={image} alt="out restaurant" />
                    </div>
                ) )}
            </div>
        </section>
    )
}