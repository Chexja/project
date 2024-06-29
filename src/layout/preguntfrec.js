import React from 'react';
import Preguntas  from '/workspaces/project/src/layout/preguntas' ;
import Contactanos from '/workspaces/project/src/layout/contactanos';
import '/workspaces/project/src/css/Preguntas.css'; 
import '/workspaces/project/src/css/Contactanos.css'; 

const PreguntFrec = () => {
    return (
        <div>
            <Preguntas />
            <Contactanos/>
        </div>
    );
};

export default PreguntFrec;