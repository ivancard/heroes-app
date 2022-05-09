import React from 'react';
import { Link } from 'react-router-dom';
import imgHeroes from './assets/heroes/heroesImg';

import './heroCard.scss';

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
    return (
        <div
            className="card ms-3 mb-4"
            style={{
                margin: '0 auto',
                maxWidth: '600px',
                width: '20%',
                overflow: 'hidden',
            }}
        >
            <div className="row no-gutters" style={{ flexDirection: 'column' }}>
                <div className="imgContainer" style={{ overflow: 'hidden' }}>
                    <Link to={`/hero/${id}`}>
                        <img src={imgHeroes[id]} className="card-img" alt={superhero} />
                    </Link>
                </div>
                <h3
                    className=" w-75 card-title mt-2"
                    style={{
                        paddingLeft: '20px',
                    }}
                >
                    {superhero}
                </h3>
                <p className="card-text mb-1" style={{ marginLeft: '20px' }}>
                    <b>Alter-ego:</b> {alter_ego}
                </p>

                {alter_ego !== characters && (
                    <p className="card-text w-75" style={{ marginLeft: '20px' }}>
                        <b>Other characters:</b> {characters}
                    </p>
                )}

                <p className="card-text w-75" style={{ marginLeft: '20px' }}>
                    <small className="text-muted">
                        <b>First appearance:</b> {first_appearance}
                    </small>
                </p>

                <Link className="btn btn-sm btn-dark w-25 m-auto mb-3" to={`/hero/${id}`}>
                    More...
                </Link>
            </div>
        </div>
    );
};
