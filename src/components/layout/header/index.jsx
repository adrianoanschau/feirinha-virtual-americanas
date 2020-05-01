import React from 'react';
import {GoSearch} from 'react-icons/go';
import './styles.scss';
import {ReactComponent as TextLogo} from '../../../assets/text-logo.svg';

export function Header() {

    return (
        <header className="Main-Header">
            <div>
                <TextLogo className="TextLogo" />
            </div>
            <div>
                <div className="field">
                    <span className="icon"><GoSearch /></span>
                    <input type="text" placeholder="tem tuuudo, pode procurar :)" />
                </div>
            </div>
        </header>
    )

}