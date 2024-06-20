import style from "./style.module.scss"

export function RestrictedSection({ handleLogout }) {

    return(
        <div className={style.container}>
            <h3>
                Seja Bem Vindo!
            </h3>
            <button onClick={handleLogout} type="submit" id="loginButton">
                Logout
            </button>
        </div>
    )
}