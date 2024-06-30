import React from 'react';
import Search  from '/workspaces/project/src/layout/search' ;
import TopSelection from '/workspaces/project/src/layout/topselection';
import Carrusel from '/workspaces/project/src/layout/carrusel';
import '/workspaces/project/src/css/Search.css'; 
import '/workspaces/project/src/css/TopSelection.css'; 

const App = () => {
    return (
        <div>
            <Search />
            <TopSelection />
            <br />
            <center><h2>Procesadores y TarjetaGrafica</h2></center>
            <br />
            <Carrusel/>
            
        </div>
    );
};

export default App;