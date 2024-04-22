import './asideright.css'

function AsideRight() {
  return (
    <section className='aside-right__container'>
        <h3 className='aside-right__title'></h3>
        <article className='logos'>
        <a href="https://www.hbomax.com/se/sv#movies">
            <img src="src/assets/hbomax.png" alt="" />
        </a>
        <a href="https://www.disneyplus.com/sv-se">
            <img src="src/assets/disney-plus.png" alt="" />
        </a>
        <a href="https://www.primevideo.com/storefront/ref=atv_hom_offers_c_9zZ8D2_hm_mv?contentType=movie&contentId=home">
            <img src="src/assets/Amazon-Prime-Video-Icon.png" alt="" />
        </a>
        <a href="https://tv.apple.com/">
            <img src="src/assets/Apple-TV-macOS-logo.png" alt="" />
        </a>
        <a href="https://www.sfanytime.com/sv/home">
            <img src="src/assets/sfanytime.png" alt="" />
        </a>
        <a href="https://www.skyshowtime.com/se?">
            <img src="src/assets/skyshowtime.png" alt="" />
        </a>
        <a href="https://viaplay.se/se-sv/">
            <img src="src/assets/viaplaylogo.png" alt="" />
        </a>
        <a href="https://www.discoveryplus.com/se/">
            <img src="src/assets/discoveryplus.jpg" alt="" />
        </a>
        </article>
    </section>
  )
}

export default AsideRight
