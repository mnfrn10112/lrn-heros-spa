import { heroes } from "../data/heroes";

export const getHeroesByPublish = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not valid publisher`)
    }
    return heroes.filter(h=>h.publisher === publisher);
};
