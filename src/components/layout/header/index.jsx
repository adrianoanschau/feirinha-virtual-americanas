import React from 'react';
import {Link} from 'react-router-dom';
import {GoSearch} from 'react-icons/go';
import {IoIosArrowBack} from 'react-icons/io';
import './styles.scss';
import {ReactComponent as TextLogo} from '../../../assets/text-logo.svg';
import { AppContext } from '../../../App';

export function Header() {

    const {title} = React.useContext(AppContext);

    return <>
        <header className="Main-Header">
            <div>
                {!!title && <Link className="back" to="/home">
                    <span className="icon">
                        <IoIosArrowBack />
                    </span>
                    <span>Voltar</span>
                </Link>}
                <div className="title">
                    {!title && <TextLogo className="TextLogo" />}
                    {!!title && <h1>{title}</h1>}
                </div>
            </div>
            <div>
                <div className="input-field">
                    <span className="icon"><GoSearch /></span>
                    <input type="text" placeholder="tem tuuudo, pode procurar :)" />
                </div>
            </div>
            {!!title && <div className="tendinha"></div>}
        </header>
    </>

}