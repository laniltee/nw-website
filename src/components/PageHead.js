import React from 'react';

function PageHead() {
    return (
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Album example</h1>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                <p>
                    <a href="#/songs" class="btn btn-primary my-2">Main call to action</a>
                </p>
            </div>
        </section>
    );
}

export default PageHead;
