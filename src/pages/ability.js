import {useParams} from "react-router-dom";

import HearthstoneService from "../components/service/service";
import { useEffect, useState } from "react";


import cards from '../resourses/cards.png';
import pict from '../resourses/Trall.png';
import './ability.css';

const Ability = () => {

    let {category} = useParams();
    console.log(category);

    const [ability, setAbility] = useState();
    const {getInfo, setProces} = HearthstoneService();

    useEffect( () => {
        const getRes = async () => {
            try {
                const res = await getInfo();
                const getAbility = res[category];
                console.log(getAbility);
                setAbility(getAbility);
            } catch {
                setProces('error')
            }
        }
        getRes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])


    

    return (
        <div className="view_sector">
            {View(ability)}
        </div>
    )
}

const View = (abl) => {
    if (Array.isArray(abl)) {
        return (
            <main className="main_view">
                <section className="list_ability">
                {abl.map(item => {
                    return (
                        <ul className="abilites" key={item.id}>
                            {item} 
                        </ul>
                       
                    );
                })}
            </section>
            <img className="trall" src={pict} alt="trall"/>
            </main>
            
        );
    } else {
        return ( 
            <section>
                <div className="path">
               Current path is -  {abl}
                </div>
                <div className="path_img" >
                    <img src={cards} alt="cards"/>
                </div>
            </section>
        );
    }
};

export default Ability;