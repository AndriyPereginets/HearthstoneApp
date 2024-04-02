import setContent from '../../../utils/setContent';

import './cards.css';
const Cards = ({data, process}) => {

    return (
        <>
            <div>
               {setContent(process, View, data)}
            </div>
        </>
    )
}

const View = ({data}) => {
        return (
            <div className={data.length > 10 ? 'big_background_tavern_container' : 'background_tavern_container' }>
                <ul className="cards_heroes">
                    {data?.length && data.map((ability) => (
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
        )   
}

export default Cards;