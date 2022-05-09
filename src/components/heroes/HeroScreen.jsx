import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

import imgHero from './assets/heroes/heroesImg';

export const HeroScreen = () => {
    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    if (!hero) {
        return <Navigate to="/ " />;
    }
    return (
        <div className="row mt-3 animate__animated animate__fadeIn">
            <div className="col-5">
                <h2>{hero.superhero}</h2>
                <div className="card overflow-hidden" style={{ marginTop: '20px' }}>
                    <img src={imgHero[heroId]} alt={heroId} title={heroId} />
                </div>
            </div>
            <div className="col-5" style={{ marginTop: '60px' }}>
                <ul
                    className="list-group list-group-flush"
                    style={{ listStyle: 'none', fontSize: '1.4rem' }}
                >
                    <li>
                        <b>Alter ego: </b>
                        {hero.alter_ego}
                    </li>
                    <li>
                        <b>Character: </b>
                        {hero.characters}
                    </li>
                    <li>
                        <b>First appearance: </b>
                        {hero.first_appearance}
                    </li>
                    <li>
                        <b>Publisher: </b>
                        {hero.publisher}
                    </li>
                </ul>
            </div>
        </div>
    );
};
