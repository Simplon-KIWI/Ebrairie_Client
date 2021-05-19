import React from 'react';

const Inputgroup = ({type, name, id, className, minlength, pattern}) => {

    const EMAIL_REGEX = /\S+@\S+\.\S+/;
    const handleChange = (event, type) => {
        // event.target.setCustomValidity("Toujours le même message ?")
        if (type == "email"){
            return event.target.setCustomValidity("veuillez insérer un email valide : exemple@mail.fr")
        }
        if (type == "text"){
            return event.target.setCustomValidity("veuillez renseigner ce champ")
        }
        if (type == "password"){
            return event.target.setCustomValidity("veuillez insérer un mot de passe valide, ")
        }
        } 
        

    return (
        <div>
            <div>
                
            </div>
            <label>
                {name}
            </label>
            {
                type==="text" && <input type={type} id={id} className={className} onChange={(event) => handleChange(event, type)} required /> 
            }
            {
                type==="password" && <input type={type} id={id} className={className} minLength={minlength} onChange={handleChange} required/>
            }

            {
                type==="email" && <input type={type} id={id} className={className} pattern={EMAIL_REGEX} onChange={handleChange} required />
            }
        </div>
    );
};

export default Inputgroup;