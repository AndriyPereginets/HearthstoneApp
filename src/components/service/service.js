
import { Http } from "../hooks/http.hooks";


const HearthstoneService =  () => {

    const {request, proces, setProces} = Http();

    const urlCards = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search';
    const urlInfo = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '346f71e4e1mshb6a258dedcd1845p10500ejsn2975a4fcd6a9',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};


    const getInfo = async () => {
        const res = await request(urlInfo, options);
        const transformedAbility = _transformAbility(res)
        return transformedAbility;
    }

    const getAllClasses = async (card = 'Ysera') => {
            const res = await request(card ? `${urlCards}/${card}` : urlCards, options);
            return res;
        }

        const _transformAbility = (item) => {
            return {
                Patch: item.patch,
                Classes: item.classes,
                Sets: item.sets,
                Standard: item.standard,
                Wild: item.wild,
                Types: item.types,
                Factions: item.factions,
                Qualities: item.qualities,
                Races: item.races,
                Locales: item.locales
            }
            

        }

        return {getAllClasses, getInfo, proces, setProces}
    };



    

export default HearthstoneService;
    


    



