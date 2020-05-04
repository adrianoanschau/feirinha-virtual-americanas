import React from 'react';
import './localization.scss';
import { AppContext } from '../App';
import { getLocals } from '../services/localization';

export function Localization() {

    const { setTitle } = React.useContext(AppContext);
    const [locals, setLocals] = React.useState([]);
    const [neighborhoods, setNeighborhoods] = React.useState([]);
  
    React.useEffect(() => {
      setTitle('feirinha local');
    }, [setTitle]);

    React.useEffect(() => {
      (async () => setLocals(await getLocals()))();
    }, []);

    function changeCity(city) {
        if (city) {
            setNeighborhoods(locals.find((value) => value.id === city).neighborhoods);
        }
    }

    return (
        <div className="Localization-Page">
            <div className="form">
                <div className="form-field">
                    <span className="label">CIDADE</span>
                    <select className="input-field" onChange={(e) => changeCity(e.target.value)}>
                        <option value="">--selecione--</option>
                        {locals.map((local) =>
                        <option value={local.id}>{local.city} - {local.state}</option>
                        )}
                    </select>
                </div>
                <div className="form-field">
                    <span className="label">BAIRRO</span>
                    <select className="input-field" disabled={!neighborhoods.length}>
                        {neighborhoods.map((neighborhood) =>
                        <option value={neighborhood}>{neighborhood}</option>
                        )}
                    </select>
                </div>
                <button className="button">
                    continuar
                </button>
            </div>
        </div>
    )
}