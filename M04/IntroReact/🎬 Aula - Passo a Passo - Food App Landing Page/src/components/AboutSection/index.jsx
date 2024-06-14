import AppIcon from '../../assets/AppIcon.svg'
import style from './style.module.css'

export function AboutSection() {

    return(
        <section className={`${style.aboutSection} section-padding`}>
            <div className="container">
                <div className={style.flex}>
                    <div>
                        <img 
                        src={AppIcon} 
                        alt="App Icon"
                        />
                        <h2 className='title lg black'>
                            Sobre o <span className='red'>aplicativo</span>
                        </h2>
                    </div>
                    <p className='paragraph black'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti sed quam laborum officiis dolorem corporis quis? Natus, minima ut dicta eos odio perferendis aliquid, similique cupiditate sit quisquam sequi!
                    </p>
                </div>
            </div>
        </section>
    )
}