import React from 'react';
import album_art from '../art/shihan.jpg';

function Artist() {
    return (
        <div class="col-md-3 album-song">
            <div class="card mb-3 shadow-sm">
                <div class="card-body">
                    <img src={album_art} class="card-img-top album-art-img" alt="album_cover" />
                    <h5 class="card-title text-centered text-center">Shihan Mihiranga</h5>
                    {/* <p class="card-text">10 songs, 1 albums</p> */}
                </div>
            </div>
        </div>
    );
}

export default Artist;
