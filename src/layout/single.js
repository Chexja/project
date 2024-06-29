import Procesador from '/workspaces/project/src/procesador.json'

const Single = () => {

     const currentRoute = window.location.pathname;
     const procesador = Procesador.find(it => currentRoute.includes(it.slug))

     return (<>
         <center><h1>{procesador.name}</h1></center>
           <hr></hr>
           <div style={{ display: 'flex', justifyContent: 'center' }}>
           <img 
              src={procesador.picture} 
              alt={procesador.name} 
              style={{ marginBottom: '10px', width: '900px', height: 'auto' }} 
            />
            </div>
           <center><p style={{ marginTop: '10px', fontSize: '16px' }}>{procesador.description}</p></center>
         
     </>);

}

export default Single;