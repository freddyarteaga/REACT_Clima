import React from 'react';

const Formulario = () => {
    return ( 
        <form>
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='ciudad'
                    id='ciudad'
                />
                <label htmlfor='ciudad'>Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                >
                    <option value=''>-- Seleccione un Pais --</option>
                </select>
                <label htmlfor='pais'>Pais: </label>
            </div>
        </form>
     );
}
 
export default Formulario;