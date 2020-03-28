import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import './styles.css';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setwhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }
        
        api.post('ongs', data).then((r)=>{
            alert(`Seu ID de acesso: ${r.data.id}`);
            history.push('/');
        }).catch( e => {
            alert(`Erro no cadastro, tente novamente.`);
        });
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo"/>

                    <h1>Cadastro</h1>
                    <p>
                        Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input required type="text" placeholder="Nome da Ong"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input required type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input required type="text" placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setwhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input required type="text" placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input required type="text" placeholder="UF" style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}