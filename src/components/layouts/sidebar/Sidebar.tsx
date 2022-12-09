/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            {/* ========== App Menu ========== */}
            <div className="app-menu navbar-menu">
            {/* LOGO */}
            <div className="navbar-brand-box">
                {/* Dark Logo*/}
                
                <a href="index-2.html" className="logo logo-dark">
                    <span className="logo-sm">
                        1XC OFFICE
                        {/* <img src="assets/images/1xcrypto.svg" alt='' height={32} /> */}
                    </span>
                    <span className="logo-lg">
                        1XC OFFICE
                        {/* <img src="assets/images/1xcrypto.svg" alt='' height={17} /> */}
                    </span>
                </a>
                {/* Light Logo*/}
                <a href="index-2.html" className="logo logo-light">
                    <span className="logo-sm">
                        1XC OFFICE
                        {/* <img src="assets/images/1xcrypto.svg" alt='' height={22} /> */}
                    </span>
                    <span className="logo-lg">
                        1XC OFFICE
                        {/* <img src="assets/images/1xcrypto.svg" alt='' height={17} /> */}
                    </span>
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                <i className="ri-record-circle-line" />
                </button>
            </div>
            <div id="scrollbar">
                <div className="container-fluid">
                <div id="two-column-menu">
                </div>
                <ul className="navbar-nav" id="navbar-nav">
                    <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                    <li className="nav-item">
                        <Link to={'/dashboard'} className="nav-link menu-link"   role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                            <i className="ri-dashboard-2-line" /> <span data-key="t-dashboards">Dashboard</span>
                        </Link>
                    </li>
                    {/* end Dashboard Menu */}
                    <li className="nav-item">
                        <a className="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApps">
                            <i className="ri-apps-2-line" /> <span data-key="t-apps">Clients</span>
                        </a>
                        <div className="collapse menu-dropdown" id="sidebarApps">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                    <Link to={'/dashboard/clients'} className="nav-link" data-key="t-calendar">
                                        Comptes Standard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/dashboard/business'} className="nav-link" data-key="t-calendar">
                                        Comptes Business
                                    </Link>                                
                                </li>
                                <li className="nav-item">
                                    <Link to={'/dashboard/wallets'} className="nav-link" data-key="t-calendar">
                                        Portefeuilles
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/dashboard/client-service'} className="nav-link" data-key="t-calendar">
                                        Service clientèle
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link menu-link" href="#sidebarLayouts" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLayouts">
                            <i className="ri-layout-3-line" /> <span data-key="t-layouts">Exchange</span> <span className="badge badge-pill bg-danger" data-key="t-hot">Hot</span>
                        </a>
                        <div className="collapse menu-dropdown" id="sidebarLayouts">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                    <Link to={'/dashboard/exchanges/tickets'} className="nav-link" data-key="t-calendar">
                                        Tickets
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <a href="#sidebarSignIn" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSignIn" data-key="t-signin"> 
                                        Transactions
                                    </a>
                                    <div className="collapse menu-dropdown" id="sidebarSignIn">
                                        <ul className="nav nav-sm flex-column">
                                            <li className="nav-item">
                                                <Link to={'/dashboard/exchanges/deposits'} className="nav-link" data-key="t-calendar">
                                                    Dépôts
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={'/dashboard/exchanges/withdrawals'} className="nav-link" data-key="t-calendar">
                                                    Retraits
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={'/dashboard/exchanges/transferts'} className="nav-link" data-key="t-calendar">
                                                    Transferts
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {/* end Dashboard Menu */}
                    <li className="menu-title"><i className="ri-more-fill" /> <span data-key="t-pages">Pages</span></li>
                    <li className="nav-item">
                        <a className="nav-link menu-link" href="#sidebarAuth" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
                            <i className="ri-account-circle-line" /> <span data-key="t-authentication">CARD MANAGER</span>
                        </a>
                        <div className="collapse menu-dropdown" id="sidebarAuth">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                    <Link to={'/dashboard/card-manager'} className="nav-link" data-key="t-calendar">
                                        Cards activés
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/dashboard/card-manager/serials'} className="nav-link" data-key="t-calendar">
                                        Séries
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/dashboard/card-manager/orders'} className="nav-link" data-key="t-calendar">
                                        Commandes
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/dashboard/card-manager/variants'} className="nav-link" data-key="t-calendar">
                                        Variantes
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-title"><i className="ri-more-fill" /> <span data-key="t-components">Systems</span></li>
                    <li className="nav-item">
                        <a className="nav-link menu-link" href="#sidebarUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarUI">
                            <i className="ri-pencil-ruler-2-line" /> <span data-key="t-base-ui">Configurations</span>
                        </a>
                        <div className="collapse menu-dropdown mega-dropdown-menu" id="sidebarUI">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ul className="nav nav-sm flex-column">
                                        <li className="nav-item">
                                            <Link to={'/dashboard/system-config'} className="nav-link" data-key="t-calendar">
                                                Propriétés Systems
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/dashboard/system-config/apis-accounts'} className="nav-link" data-key="t-calendar">
                                                Comptes API
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/dashboard/system-config/methods'} className="nav-link" data-key="t-calendar">
                                                Méthodes paiement
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link menu-link" href="#sidebarAdvanceUI" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAdvanceUI">
                            <i className="ri-stack-line" /> <span data-key="t-advance-ui">Utilisateurs</span>
                        </a>
                        <div className="collapse menu-dropdown" id="sidebarAdvanceUI">
                            <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                    <Link to={'/dashboard/users'} className="nav-link" data-key="t-calendar">
                                        Comptes admins
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/dashboard/users/logs'} className="nav-link" data-key="t-calendar">
                                        Historiques de connexion
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to={'/dashboard/system-logs'} className="nav-link" data-key="t-calendar">
                            Journaux
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/dashboard/events'} className="nav-link" data-key="t-calendar">
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/dashboard/system-logs'} className="nav-link" data-key="t-calendar">
                            Messages
                        </Link>
                    </li>
                </ul>
                </div>
                {/* Sidebar */}
            </div>
            <div className="sidebar-background" />
            </div>
            {/* Left Sidebar End */}

        </>
    )
}

export default Sidebar