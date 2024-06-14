import { RestaurantList } from "./RestaurantList";
import RestaurantIcon from '../../assets/RestaurantIcon.svg'
import style from './style.module.css'

export function RestaurantSection() {

    return(
        <section className={`${style.restaurantSection} section-green section-padding`}>
            <div className="container">
                <img 
                src={RestaurantIcon} 
                alt="Restaurant Icon"
                />
                <h2 className="title md white">
                    Restaurantes Famosos
                </h2>
                <RestaurantList />
            </div>
        </section>
    )
}