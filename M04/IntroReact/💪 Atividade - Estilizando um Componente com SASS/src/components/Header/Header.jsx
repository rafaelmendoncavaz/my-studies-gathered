import logo from '../../assets/MyHeader.svg'
import style from './style.module.scss'

export function Header() {

    return (
        <header className={style.headerContainer}>
            <img src={logo} alt="Logo" />
            <nav>
                <a href="">home</a>
                <a href="">contato</a>
                <a href="">sobre</a>
                <button>
                    Fale agora
                </button>
            </nav>
        </header>
    )
}