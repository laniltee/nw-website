import React from 'react';
import AlbumArt from '../components/AlbumArt';
import PageHead from '../components/PageHead';
import { getSongsForHome } from '../data/dataMapper';

function Songs() {
    const songs = getSongsForHome();
    const albumArts = songs.map(song => {
        return (
            <AlbumArt song={song} />
        )
    });
    return (
        <div>
            <PageHead />
            <div className="container">
                {/* <div className="row">
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
                </div> */}
                <div className="row">
                    {albumArts}
                </div>
            </div>
        </div>
    );
}

export default Songs;
