import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = (props) => (
    <div className='card-list'>
    {props.players.map(player => (
        <Card key={player.id} player={player} />
         ))}
    
    </div>
    );