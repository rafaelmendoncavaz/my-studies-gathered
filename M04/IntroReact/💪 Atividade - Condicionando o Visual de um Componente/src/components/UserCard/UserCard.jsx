import style from './style.module.scss'

export function UserCard({ name, email, status }) {

    return (
        <div className={style.container}>
            <p className={style.name}>
                Name: {name}
            </p>
            <p className={style.email}>
                Email: {email}
            </p>
            <div className={style.status}>
                <div className={`${style.indicator} ${status ? style.active : style.inactive}`}>
                </div>
                <p>
                    {status ? "Online" : "Offline"}
                </p>
            </div>
        </div>
    )
}