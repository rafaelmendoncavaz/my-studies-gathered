export function ConvertingForm() {

    return(
        <form className="form ">
            <input 
            type="text" 
            name="Nome" 
            id="nome" 
            placeholder="Nome" 
            />
            <input 
            type="email" 
            name="Email" 
            id="email" 
            placeholder="Email" 
            />
            <button 
            type="submit"
            className="btn green"
            >
                Saiba Mais
            </button>
        </form>
    )
}