import React from 'react';
import album_art from '../art/billy-yuwathiya.jpg'
import 'font-awesome/css/font-awesome.min.css';

function AlbumArt(props) {
    const { song } = props;
    return (
        <div class="col-md-3 album-song">
            <div class="card mb-3 shadow-sm">
                <div class="card-body">
                    <img src={process.env.PUBLIC_URL + 'art/' + song.coverArt} class="card-img-top album-art-img" alt="album_cover" />
                    <h5 class="card-title">{song.title}</h5>
                    <p class="card-text">{song.artist}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                <i class="fa fa-youtube-play"></i>

                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                <i class="fa fa-music"></i>

                            </button>
                        </div>
                        <small class="text-muted">2019</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumArt;
