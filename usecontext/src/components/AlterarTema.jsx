import React, { createContext, useContext, useState } from 'react';
import '../style.css'

const ThemeContext = createContext();

function AlterarCor() {
    const [theme, setTheme] = useState("Claro");

    function alternarTema() {
        setTheme((temaAnterior) => (temaAnterior === 'Claro' ? 'Escuro' : 'Claro'));
    }

    return (
        <div className='App'>
            <ThemeContext.Provider value={{ theme, alternarTema }}>
                <input 
                    type="checkbox"
                    checked={theme === 'Escuro'}
                    onChange={alternarTema}
                />
                <AlternarTema />
            </ThemeContext.Provider>
        </div>
    );
}

function AlternarTema() {
    const { theme } = useContext(ThemeContext);

    return (
        <button className={`button-${theme}`}>
            Tema {theme === 'Claro' ? 'Escuro' : 'Claro'}
        </button>
    );
}

export default AlterarCor;
