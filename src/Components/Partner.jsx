import React, { Component } from 'react';

class Partner extends Component {
    render() {
        return (
            <div className="Partner">
                <div className='container'>
                    <div className="row slide">
                            <div className="col-md-3">
                                <img src="/assets/images/facebook.png" alt=""/>
                            </div>
                            <div className="col-md-3">
                                <img src="/assets/images/twitter.png" alt=""/>
                            </div>
                            <div className="col-md-3">
                                <img src="/assets/images/linkedin.png" alt=""/>
                            </div>
                            <div className="col-md-3">
                                <img src="/assets/images/skype.png" alt=""/>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partner;