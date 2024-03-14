import { useState, useEffect } from 'react';
import HearthstoneService from '../service/service';

import Cards from "./cards/cards";
import SearchHero from "./search/searchCard";


const GetCards = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const {getAllClasses} = HearthstoneService();

    const handleSearch = async () => {
        const res = await getAllClasses(search);
        const filteredCards = res.filter(ability => ability.img);
        setData(filteredCards);
    };

    useEffect(() => {
        const getData = async () => {
            try{
                if (!data.length) {
                    const res =  await getAllClasses()
                    const filteredCards = res.filter(ability => ability.img);
                    console.log(res);
                    setData(filteredCards);
                }
               
            } catch {
                 console.error('Something wrong!');
            }
        }
        getData();
    }, [getAllClasses, data])

    console.log(search);

    return (
        <>   
            <SearchHero search={search} setSearch={setSearch} handleSearch={handleSearch}/>
            <Cards search={search} data={data}/>
        </> 
    )
}


export default GetCards;