import './asideright.css'


function AsideRight() {
    return (   
        <section className='aside-container'>
            <h3>Services</h3>
        <aside className='aside-right'>          
            <a href="https://www.netflix.com/browse">
            <img className='aside-logo' src="src/assets/Netflix-new-icon.png" alt="" />
            </a>
            <a href="https://www.hbomax.com/se/sv#movies">
            <img className='aside-logo' src="src/assets/hbomax.png" alt="" />
            </a>
            <a href="https://www.disneyplus.com/sv-se">
            <img className='aside-logo' src="src/assets/disney-plus.png" alt="" />
            </a>
            <a href="https://www.sfanytime.com/sv/home">
            <img className='aside-logo' src="src/assets/sfanytime.png" alt="" />
            </a>
            <a href="https://viaplay.se/se-sv/">
            <img className='aside-logo' src="src/assets/viaplaylogo.png" alt="" />
            </a>
            <a href="https://www.discoveryplus.com/se/">
            <img className='aside-logo' src="src/assets/discoveryplus.jpg" alt="" />
            </a>
            <a href="https://tv.apple.com/">
            <img className='aside-logo' src="src/assets/Apple-TV-macOS-logo.png" alt="" />
            </a>
            <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=atv_hom_offers_c_9zZ8D2_hom">
            <img className='aside-logo' src="src/assets/Amazon-Prime-Video-Icon.png" alt="" />
            </a>
            <a href="https://www.skyshowtime.com/se?">
            <img className='aside-logo' src="src/assets/skyshowtime.png" alt="" />
            </a>
        </aside>
        </section>
    )
}

export default AsideRight
