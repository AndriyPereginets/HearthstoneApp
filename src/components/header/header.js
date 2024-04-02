import { useEffect, useState } from "react";
import HearthstoneService from "../service/service";
import { Link } from "react-router-dom";

import './header.css'
import logo from '../../resourses/hearstone.png'

const Header = () => {

    const [info, setInfo] = useState('');

    const {getInfo, setProces} = HearthstoneService();

    useEffect( () => {
        const getInfoHeartsone = async() => {
            try {
                const res = await getInfo();
                const filteredButtons = Object.keys(res).reduce((acc, key) => {
                    if (key !== 'Locales') {
                        acc[key] = res[key]
                    } 
                        return acc;
                }, {})
                setInfo(filteredButtons);
            } catch {
                setProces('error')
            }
        }
            getInfoHeartsone();
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <>
            <header className="header">
                <Link to={'/'} className="logo_header">
                    <img className="logo" src={logo} alt="logo"/>
                    <h2>Hearthstone APP</h2>
                </Link>
                <section className="nav_section">
                    <div className="buttons">
                        {info && Object.entries(info).map(([key]) => (
                        <Link to={`/filter/${key}`} key={key} className="buttons_ability">
                            {key}
                        </Link>
                        )
                    )}
                    </div>
                </section>
            </header>
            
        </>
    )
}

export default Header;