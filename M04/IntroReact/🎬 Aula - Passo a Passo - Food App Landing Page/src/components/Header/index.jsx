import Logo from '../../assets/FoodApp.svg'
import style from './style.module.css'

export function Header() {

    return(
        <header>
            <div className="container">
                <div className={style.logo}>
                    <img 
                    src={Logo} 
                    alt="FoodApp Logo" 
                    />
                </div>
            </div>
        </header>
    )
}