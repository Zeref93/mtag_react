import React from 'react'

const Addresses = ({contacts}) => {
    return (
        <div>
            <center><h1>Adressen</h1></center>
            {contacts.map((address) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{address.name}</h5>
                        <p class="card-text">
                            {address.strasse} {address.hausnummer}
                            <br/>
                            {address.plz} {address.stadt}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Addresses