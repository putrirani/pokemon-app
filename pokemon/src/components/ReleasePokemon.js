import React, { useState } from 'react';

function MyReleasePokemonComponent() {
    const [pokemonId, setPokemonId] = useState('');

    const releasePokemonHandler = () => {
        // Panggil API atau fungsi untuk melepaskan Pokemon berdasarkan ID
        // ...
    };

    return (
        <div>
            <h2>Release Pokemon</h2>
            <input
                type="text"
                placeholder="Enter Pokemon ID"
                value={pokemonId}
                onChange={(event) => setPokemonId(event.target.value)}
            />
            <button onClick={releasePokemonHandler}>Release Pokemon</button>
        </div>
    );
}

export default MyReleasePokemonComponent;
