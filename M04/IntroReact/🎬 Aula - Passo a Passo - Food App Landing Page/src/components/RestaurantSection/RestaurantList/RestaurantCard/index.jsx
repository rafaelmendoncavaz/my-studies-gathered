import style from './style.module.css'

export function RestaurantCard({ restaurant }) {
    
    return(
        <li className={style.restaurantCard}>
            <img 
            src={restaurant.image} 
            alt={`${restaurant.name} Image`} 
            />
            <h3 className="title sm white">
                {restaurant.name}
            </h3>
            <p className="paragraph white">
                {restaurant.description}
            </p>
        </li>
    )
}