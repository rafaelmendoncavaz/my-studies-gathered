import { useState } from "react"

export function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleForm = (event) => {
        event.preventDefault()

        alert(`Mensagem enviada:

            Nome: ${name}
            Email: ${email}
            Mensagem: ${message}`
        )

        setName("")
        setEmail("")
        setMessage("")
        
    }

    return (
        <form id="messageForm" onSubmit={handleForm}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name" placeholder="Digite o nome..." onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Digite o email..." onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <label htmlFor="textarea">Mensagem:</label>
            <br></br>
            <textarea name="message" id="textarea" placeholder="Digite sua mensagem..." onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            <br></br>
            <button type="submit" id="sendButton" >Enviar</button>
        </form>
    )
}