import React from 'react';
import '../Styles/PlayerSidebarOption.css';

function PlayerSidebarOption({title, Icon}) {
    return (
        <div className = "playersidebaroption">
            {Icon && <Icon className = "playersidebaroption__icon"/>}
            {Icon ? <h4>{title}</h4> : <p> {title} </p>}
        </div>
    )
}

export default PlayerSidebarOption;
