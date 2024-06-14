import Banner from '../../assets/Banner.png'
import style from './style.module.css'

export function BannerSection() {

    return(
        <section className={`${style.bannerSection} section-padding`}>
            <div className="container">
                <div className={style.flex}>
                    <div>
                        <h1 className='title black lg'>
                            Descubra o melhor <span className='red'>aplicativo de comida</span>
                        </h1>
                        <p className='paragraph black'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit rem iure consequatur animi nemo blanditiis itaque, ut, quas, voluptates nostrum nulla vitae ea quis in suscipit sint a quae. Quod?
                        </p>
                        <a 
                        href="#"
                        className='btn red'
                        >
                            Saiba mais
                        </a>
                    </div>
                    <img 
                    src={Banner} 
                    alt="Banner Image" 
                    />
                </div> 
            </div>
       </section>
    )
}