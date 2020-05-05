import React from 'react';
import { useHistory } from 'react-router-dom';
import './localization.scss';
import { AppContext } from '../App';
import { getLocals } from '../services/localization';

export function Localization() {

    const { setTitle } = React.useContext(AppContext);
    const history = useHistory();
    const [locals, setLocals] = React.useState([]);
    const [neighborhoods, setNeighborhoods] = React.useState([]);
    const [localization, setLocalization] = React.useState({ city: null, neighborhood: null });
  
    React.useEffect(() => {
      setTitle('feirinha local');
    }, [setTitle]);

    React.useEffect(() => {
      (async () => setLocals(await getLocals()))();
    }, []);

    function changeCity(cityId) {
        if (cityId) {
            const selected = locals.find((value) => value.id === cityId);
            setNeighborhoods(selected.neighborhoods);
            setLocalization(l => ({ ...l, city: selected.city }));
        }
    }

    function changeNeighborhood(neighborhood) {
        setLocalization(l => ({ ...l, neighborhood }));
    }

    function selectLocalization() {
        localStorage.setItem('localization', JSON.stringify(localization));
        history.push('/lojas');
    }

    return (
        <div className="Localization-Page">
            <div className="form">
                <div className="form-field">
                    <span className="label">CIDADE</span>
                    <select className="input-field"
                        onChange={(e) => changeCity(e.target.value)}>
                        <option value="">--selecione--</option>
                        {locals.map((local) =>
                        <option key={local.id} value={local.id}>{local.city} - {local.state}</option>
                        )}
                    </select>
                </div>
                <div className="form-field">
                    <span className="label">BAIRRO</span>
                    <select className="input-field"
                        onChange={(e) => changeNeighborhood(e.target.value)}
                        disabled={!neighborhoods.length}>
                        <option value="">--selecione--</option>
                        {neighborhoods.map((neighborhood) =>
                        <option key={neighborhood} value={neighborhood}>{neighborhood}</option>
                        )}
                    </select>
                </div>
                <button className="button"
                    onClick={selectLocalization}
                    disabled={!localization.city || !localization.neighborhood}>
                    continuar
                </button>
            </div>
        </div>
    )
}