import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import cn from 'classnames';
import { IoIosStar  } from 'react-icons/io';
import { MdFavoriteBorder, MdMoreHoriz  } from 'react-icons/md';
import { RiShoppingBasketLine  } from 'react-icons/ri';
import { BsCardList  } from 'react-icons/bs';
import './styles.scss';

const menusItems = [
    {path: '/home', label: 'destaques', icon: <IoIosStar />},
    {path: '/departamentos', label: 'departamentos', icon: <BsCardList />},
    {path: '/cesta', label: 'cesta', icon: <RiShoppingBasketLine />},
    {path: '/favoritos', label: 'favoritos', icon: <MdFavoriteBorder />},
    {path: '/feirinha-local', label: 'mais', icon: <MdMoreHoriz />},
];

export function Menu() {

    const {pathname} = useLocation();

    return (
        <div className="Main-Menu">
            <menu>
                <ul>
                    {menusItems.map(({ path, label, icon }) =>
                        <li key={path}
                            className={cn(path === pathname && 'active')}>
                            <Link to={path}>
                                <span className="icon">{icon}</span>
                                <span>{label}</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </menu>
        </div>
    )

}