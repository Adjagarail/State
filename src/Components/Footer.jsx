import React,{ Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
            <div className="container">
            <div className="row">
                    <div className="col-md-2">
                        <h5 className="title" > Stations </h5>
                        <p></p>
                        <ul className="list alt-list">
                            <li><a href="//">Eydon Ngor Almadies</a></li>
                            <li><a href="//">Eydon Mermoz</a></li>
                            <li><a href="//">Eydon Mbour</a></li>
                            <li><a href="//">Eydon Péage</a></li>
                            <li><a href="//">Toutes les stations</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="title"> Services</h5>
                        <p></p>
                        <ul className="list alt-list">
                            <li><a href="//">Carburant</a></li>
                            <li><a href="//">Badge Eydon</a></li>
                            <li><a href="//">Entretien automobile</a></li>
                            <li><a href="//">Boutique</a></li>
                            <li><a href="//">Tous les services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="title">Business</h5>
                        <p></p>
                        <ul className="list alt-list">
                            <li><a href="//">Systeme de télé jauge</a></li>
                            <li><a href="//">Equipement de stockage</a></li>
                            <li><a href="//">Station privative</a></li>
                            <li><a href="//">Gestion automatisée</a></li>
                            <li><a href="//">Parc automobile</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="title"> Communication </h5>
                        <p></p>
                        <ul className="list alt-list">
                            <li><a href="//">Nos visuels</a></li>
                            <li><a href="//">La presse en parle</a></li>
                            <li><a href="//">Eydon en image</a></li>
                            <li><a href="//">Eydon sur Facebook</a></li>
                            <li><a href="//">Eydon sur Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="title">Eydon Petrolum</h5>
                        <p></p>
                        <ul className="list alt-list">
                            <li><a href="//">Le mot du Directeur</a></li>
                            <li><a href="//">Notre histoire</a></li>
                            <li><a href="//">Nos valeurs</a></li>
                            <li><a href="//">Notre equipe</a></li>
                            <li><a href="//">Nous contacter</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5 className="title"> Partenaires </h5>
                        <p></p>

                    </div>
            </div>
            </div>
            <div className="container-fluid background">
             <hr className="spacer-30"/>
            <div className="row">
                <div className="col-md-6">
                    <p align="left"> 2019  <b>Eydon Petrolum.</b> Tous droits réservés.</p>
                </div>
                <div className="col-md-6">
                            <p align="right"> Provided by <a href="//">Wutiko</a></p>
                </div>
            </div>
            </div>
            </footer>
        );
    }
}
export default Footer;