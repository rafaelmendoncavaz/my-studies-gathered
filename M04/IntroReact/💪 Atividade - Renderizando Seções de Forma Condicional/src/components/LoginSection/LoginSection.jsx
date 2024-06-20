import style from "./style.module.scss"
import { useState } from "react"

export function LoginSection({ handleLogin }) {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className={style.container}>
            <h3>
                Login
            </h3>
            <form>

                <label htmlFor="useremail">Usuário</label>
                <input type="email" name="email" id="useremail" placeholder="Digite seu email..." onChange={(e) => setLogin(e.target.value)} value={login} />
                <label htmlFor="userpassword">Senha</label>
                <input type="password" name="password" id="userpassword" placeholder="Digite sua senha..." onChange={(e) => setPassword(e.target.value)} value={password} />
                <button onClick={handleLogin} type="submit" id="loginButton">
                    Logar
                </button>

            </form>
        </div>
    )
}