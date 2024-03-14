import { useEffect, useState } from "react";
import HearthstoneService from "../service/service"

import './header.css'
import logo from '../../resourses/hearstone.png'

const Header = () => {

    const [info, setInfo] = useState('');

    const {getInfo} = HearthstoneService();

    useEffect( () => {
        const getInfoHeartsone = async() => {
            try {
                const res = await getInfo();
                setInfo(res);
            } catch {
                console.error("Error fetching Hearthstone info:");
            }
        }
            getInfoHeartsone();
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(info);
    

    return (
        <>
            <header className="header">
                <section className="logo_header">
                    <img className="logo" src={logo} alt="logo"/>
                    <h2>Hearthstone APP</h2>
                </section>
                <div className="buttons">
                    {info && Object.entries(info).map(([key, value]) => {
                        console.log(Object.entries(info));
                return (
                    <div className="buttons_ability">
                        <ul className="list_ability">
                            {key} {Array.isArray(value) && value.map((item, index) => (
                                <li key={index} className="heartstone_ability">{item}</li>
                            ))}
                        </ul>
                    </div>
                    )
                })}
                </div>
            </header>
            
        </>
    )
}

export default Header;