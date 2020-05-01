import React from 'react';
import { IoIosStar  } from 'react-icons/io';
import { MdFavoriteBorder, MdMoreHoriz  } from 'react-icons/md';
import { RiShoppingBasketLine  } from 'react-icons/ri';
import { BsCardList  } from 'react-icons/bs';
import './styles.scss';

export function Menu() {

    return (
        <div className="Main-Menu">
            <menu>
                <ul>
                    <li className="active">
                        <a href="#">
                            <span className="icon"><IoIosStar /></span>
                            <span>destaques</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><BsCardList /></span>
                            <span>departamentos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><RiShoppingBasketLine /></span>
                            <span>cesta</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><MdFavoriteBorder /></span>
                            <span>favoritos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><MdMoreHoriz /></span>
                            <span>mais</span>
                        </a>
                    </li>
                </ul>
            </menu>
        </div>
    )

}