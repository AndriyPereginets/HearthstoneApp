import { useState, useEffect } from 'react';
import HearthstoneService from '../service/service';

import Cards from "./cards/cards";
import SearchHero from "./search/searchCard";


const GetCards = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const {getAllClasses, proces, setProces} = HearthstoneService();

    const handleSearch = async () => {
        try {
            const res = await getAllClasses(search);
            const filteredCards = res.filter(ability => ability.img);
            setData(filteredCards);
        } catch {
            setProces('error')
        }
        
    };

    useEffect(() => {
        const getData = async () => {
            try{
                if (!data.length) {
                    const res =  await getAllClasses()
                    const filteredCards = res.filter(ability => ability.img);
                    setData(filteredCards);
                    setProces('waiting');
                }
            } catch {
                 setProces('error');
            }
        }
        getData();
    }, [getAllClasses, data, setProces])


    return (
        <>  
            <SearchHero search={search} setSearch={setSearch} handleSearch={handleSearch}/>
            <Cards search={search} data={data} process={proces}/>
        </> 
    )
}


export default GetCards;