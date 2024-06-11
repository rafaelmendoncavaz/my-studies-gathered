export function StudentCard({ name, age, country }) {
    return (
        <>
            <li>
                <h1>
                    {name}
                </h1>
                <p>
                    {age}
                </p>
                <p>
                    {country}
                </p>
            </li>
        </>
    )
}