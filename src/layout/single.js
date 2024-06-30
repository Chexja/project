import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import procesadorData from '/workspaces/project/src/procesador.json';

const Single = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const procesador = procesadorData.find(it => it.slug === slug);

  if (!procesador) {
    return <div>Procesador no encontrado</div>;
  }

  const characteristicsArray = procesador.characteristics.split('\n');

  return (
    <>
      <center><h1>{procesador.name}</h1></center>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <div style={{ 
          flex: '0 0 50%', 
          textAlign: 'center', 
          borderRight: '2px solid #ccc', 
          paddingRight: '20px' 
        }}>
          <img 
            src={procesador.picture} 
            alt={procesador.name} 
            style={{ width: '300px', height: 'auto' }} 
          />
        </div>
        <div style={{ 
          flex: '1', 
          marginLeft: '20px', 
          textAlign: 'center' 
        }}>
          <div>
            {characteristicsArray.map((char, index) => {
              if (char.startsWith('VISTA RÁPIDA:')) {
                return (
                  <p key={index} style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                    {char}
                  </p>
                );
              } else {
                return (
                  <p key={index} style={{ fontSize: '14px', marginBottom: '5px', lineHeight: '1.2' }}>
                    {char}
                  </p>
                );
              }
            })}
          </div>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'red' }}>{procesador.price}</p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>Regresar</button>
      </div>
    </>
  );
}

export default Single;
