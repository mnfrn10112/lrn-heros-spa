import { heroes } from "../data/heroes";

export const getHerosByName = (search = '') => {
    search = search.toLowerCase().trim();

    if (search.length === 0) return [];

    return heroes.filter(h => h.superhero.toLowerCase().includes(search));
};
