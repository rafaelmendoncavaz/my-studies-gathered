import { RestaurantCard } from './RestaurantCard'
import { restaurants } from '../../../data/Restaurant.js'
import style from './style.module.css'

export function RestaurantList() {

    return(
        <ul className={style.restaurantList}>
            {
                restaurants.map(restaurant => (
                    <RestaurantCard 
                    key={restaurant.id} 
                    restaurant={restaurant}
                    />
                ))
            }
        </ul>
    )
}