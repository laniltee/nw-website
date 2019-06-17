import React from 'react';
import AlbumArt from '../components/AlbumArt';
import PageHead from '../components/PageHead';

function Songs() {
    return (
        <div>
            <PageHead />
            <div className="container">
                <div className="row">
                    <AlbumArt />
                    <AlbumArt />
                    <AlbumArt />
                    <AlbumArt />
                </div>
                <div className="row">
                    <AlbumArt />
                    <AlbumArt />
                    <AlbumArt />
                    <AlbumArt />
                </div>
                <div className="row">
                    <AlbumArt />
                    <AlbumArt />
                    <AlbumArt />
                    <AlbumArt />
                </div>
            </div>
        </div>
    );
}

export default Songs;
