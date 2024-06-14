import { ConvertingForm } from './ConvertingForm'
import style from './style.module.css'

export function FormSection() {

    return(
        <section className={`${style.formSection} section-red section-padding`}>
            <div className="container sm">
                <h2 className="title md white center">
                    Conheça nosso aplicativo
                </h2>
                <ConvertingForm />
            </div>
        </section>
    )
}