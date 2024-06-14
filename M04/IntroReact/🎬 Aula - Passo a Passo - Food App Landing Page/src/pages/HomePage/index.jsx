import { Header } from '../../components/Header'
import { BannerSection } from '../../components/BannerSection'
import { RestaurantSection } from '../../components/RestaurantSection'
import { AboutSection } from '../../components/AboutSection'
import { FormSection } from '../../components/FormSection'
import { Footer } from '../../components/Footer'

export function HomePage() {

    return(
        <>
            <Header />
            <main>
                <BannerSection />
                <RestaurantSection />
                <AboutSection />
                <FormSection />
            </main>
            <Footer />
        </>
    )
}