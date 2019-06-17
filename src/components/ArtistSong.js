import React from 'react';

function ArtistSong() {
    return (
        <a className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                <i class="fa fa-youtube-play artist-song"></i>
                    Sulagak Wela
                    </h5>
                <small>3:30</small>
            </div>
            <small className="song-description">Music by Nalin Perera / Produced by Shihan Mihiranga</small>
        </a>
    );
}

export default ArtistSong;
