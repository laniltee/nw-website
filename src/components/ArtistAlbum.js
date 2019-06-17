import React from 'react';
import album_art from '../art/shihan.jpg'
import ArtistSong from './ArtistSong';

function ArtistAlbum() {
    return (
        <div className="row artist-album-row">
            <div className="col-md-3">
                <img src={album_art} class="card-img-top album-art-img" alt="album_cover" />
            </div>
            <div className="col-md-9">
                <h2>Dreamz 2 Shihan</h2>
                <h5 className="lead text-muted">2018 / Produced by Maharaja Entertaintment</h5>
                <div className="songs-list">
                    <div class="list-group">
                        <ArtistSong />
                        {/* <ArtistSong /> */}
                        {/* <ArtistSong /> */}
                        {/* <ArtistSong /> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ArtistAlbum;
