
import './cards.css';


const Cards = ({data}) => {


    return (
        <>
        <div className={data.length > 8 ? 'big_background_tavern_container' : 'background_tavern_container' }>
            <ul className="cards_heroes">
                {data && data.map((ability) => (
                    <li key={ability.cardId}>
                        <section className="card_hero">
                            <div className="hero_name">Name: {ability.name}</div>
                            <div>{ability.playerClass}</div>
                            <div>{ability.cardSet}</div>
                            <img src={ability.img} alt={ability.name}></img>
                            <div className="hero_type">{ability.type}</div>
                        </section>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}



export default Cards;