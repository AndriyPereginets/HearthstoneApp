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

    

    return (
        <>
            <header className="header">
                <section className="logo_header">
                    <img className="logo" src={logo} alt="logo"/>
                    <h2>Hearthstone APP</h2>
                </section>
                <section className="nav_section">
                    <div className="buttons">
                        {info && Object.entries(info).map(([key]) => (
                        <div className="buttons_ability">
                            {key}
                        </div>
                        )
                    )}
                    </div>
                </section>
            </header>
            
        </>
    )
}

export default Header;