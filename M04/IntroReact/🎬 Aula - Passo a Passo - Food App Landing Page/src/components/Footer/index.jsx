import styles from './style.module.css'

export function Footer() {

    return(
        <footer className={styles.footer}>
            <div className="container">
                <p className="paragraph white center">
                    Todos os direitos reservados &copy; Kenzie Academy Brasil - 2023
                </p>    
            </div>
        </footer>
    )
}