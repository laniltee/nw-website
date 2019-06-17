import React from 'react';
import ArtistListHead from '../components/ArtistListHead';
import AllArtists from '../components/AllArtists';

function ArtistsList() {
    return (
        <div>
            <ArtistListHead />
            <div className="container">
                <AllArtists />
            </div>
        </div>
    );
}

export default ArtistsList;
