import React from 'react';
import Artist from '../components/Artist'

function AllArtists() {
    return (
        <div className="row artist-list">
            <Artist/>
            <Artist/>
            <Artist/>
            <Artist/>
        </div>
    );
}

export default AllArtists;
