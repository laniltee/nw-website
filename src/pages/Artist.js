import React from 'react';
import ArtistHead from '../components/ArtistHead';
import ArtistAlbum from '../components/ArtistAlbum';

function Artist() {
    return (
        <div>
            <ArtistHead />
            <div className="container">
                <ArtistAlbum />
                <ArtistAlbum />
                <ArtistAlbum />
            </div>
        </div>
    );
}

export default Artist;
