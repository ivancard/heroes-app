import { heroes } from '../../data/heros';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getHerosByName } from '../../selectors/getHerosByName';
import { useMemo } from 'react';
export const SearchScreen = () => {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();

    const q = params.get('q') || '';

    const [formValues, handleInputChange] = useForm({
        heroInputSearch: q,
    });

    const { heroInputSearch } = formValues;
    const heroesFiltered = useMemo(() => getHerosByName(heroInputSearch), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        setParams({
            q: heroInputSearch,
        });
    };

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Name of your hero"
                            className="form-control"
                            name="heroInputSearch"
                            value={heroInputSearch}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button type="submit" className="btn btn-block btn-dark m-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {q === '' && <div className="alert alert-info">Search a hero</div>}
                    {q !== '' && heroesFiltered.length === 0 && (
                        <div className="alert alert-warning">
                            There is not a hero with this name
                        </div>
                    )}

                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    );
};
