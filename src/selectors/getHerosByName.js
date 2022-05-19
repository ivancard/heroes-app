import { heroes } from '../data/heros';

export const getHerosByName = (name = '') => {
    if (!name || name.trim() === '') {
        return [];
    }

    return heroes.filter((hero) =>
        hero.superhero.toLowerCase().includes(name.toLowerCase()),
    );
};
