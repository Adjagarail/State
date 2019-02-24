import React, { Component } from 'react';

class Actu extends Component {
    render() {
        return (
            <div className="container">
                <h2><b>Actualités</b></h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-carousel staff-list">
                            <div className="single-staff-item">
                                <img src="/assets/images/2.jpg" alt="article one"/>
                                <div className="staff-meta">    
                                    <h3><b>Article One</b></h3>
                                    <p className="staff-desc">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Ab excepturi iure aspernatur esse velit fugit voluptas sed.
                                    Hic iusto ipsam quis, rerum dolor aliquid minima dolore explicabo incidunt animi facilis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Actu;