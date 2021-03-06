import React from "react";
import "./Inicio.css";

export class Inicio extends React.Component {
    render() {
        return (
            <div>
                <div className="inicio">
                    <div>
                        <h1>Escolha seu destino!</h1>
                        <p>
                            Escolha seu destino e venha para uma viajem que você não esperava.
                            <br />
                            Expanda suas fronteiras, embarque nessa viagem intergalática
                            que vai te levar as alturas.
                            <br />
                            <br />
                            Não perca essa oportunidade!
                        </p>
                    </div>
                    <div className="inputGroup">
                        <p>Destino</p>
                        <select className="destinoSelect">
                            <option value="0"> Selecione uma opção </option>
                            <option value="Marte">Marte</option>
                            <option value="Terra">Terra</option>
                            <option value="Lua">Lua</option>
                        </select>
                    </div>
                    {/* {inputValue} */}
                </div>
            </div>
        );
    }
}


