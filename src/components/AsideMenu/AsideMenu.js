import React from 'react';
import Tag, { TAG_TYPES } from '../Tag/Tag';
import tags from '../../tags';
import './AsideMenu.scss';

const AsideMenu = (props) => (
    <div className='aside-menu'>
        <div className='nav-aside-menu'>Etiquetas</div>
        {
            tags.map(tag => 
            <Tag
                type={TAG_TYPES.BIG}
                key={tag.id}
                color={tag.color}
                name={tag.name}
            />)
        }
    </div>
)

export default AsideMenu