import setContent from '../../../utils/setContent';

import './cards.css';
const Cards = ({data, process}) => {

    console.log(data);
    console.log(process);

    return (
        <>
            <div className={data.length > 8 ? 'big_background_tavern_container' : 'background_tavern_container' }>
               {setContent(process, View, data)}
            </div>
        </>
    )
}

const View = ({data}) => {
        return (
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
        )   
}

export default Cards;