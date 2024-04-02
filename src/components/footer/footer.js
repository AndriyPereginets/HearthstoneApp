import blizzard from '../../resourses/blizzard.png'

import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'> 
            <section className='footer_logo'>
                 <a href='https://www.blizzard.com/' target="_blank" rel="noopener noreferrer">
                    <img className='blizzard_logo' src={blizzard} alt='logo'/>
                </a>
             <p>©2024 Blizzard Entertainment, Inc. <br/>
                All <a className='link' href='https://www.blizzard.com/en-us/legal/b04001c4-dc81-480d-a475-5e276e241e4f/third-party-legal-notices' target="_blank" rel="noopener noreferrer">trademarks</a> referenced herein are the properties of their respective owners.</p>
            </section>
            <p>All information from <a className='link' href='https://rapidapi.com/omgvamp/api/hearthstone/' target="_blank" rel="noopener noreferrer">Rapid Api</a></p>
    </footer>
    )
}

export default Footer;