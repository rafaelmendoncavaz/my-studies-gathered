import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export function DefaultTemplate({children}) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}