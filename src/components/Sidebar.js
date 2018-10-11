import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


const SubMenuLink = ({to, title}) => (
    <li className="nav-item">
        <NavLink to={to} className="nav-link" activeClassName="active">{title}</NavLink>
    </li>
);


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const path = this.props.pathname;
        const classesForFirstLevel = p => 'nav-link' + (path.includes(p) ? ' active' : '');
        console.log(path);

        return (
            <div className="sidebar sidebar-light sidebar-main sidebar-fixed sidebar-expand-md">
                <div className="sidebar-mobile-toggler text-center">
                    <a className="sidebar-mobile-main-toggle"><i className="icon-arrow-left8"/></a>
                    Navigation
                    <a className="sidebar-mobile-expand">
                        <i className="icon-screen-full"/>
                        <i className="icon-screen-normal"/>
                    </a>
                </div>

                <div className="sidebar-content">
                    <div className="sidebar-user-material">
                        <div className="sidebar-user-material-body">
                            <div className="card-body text-center">
                                <a>
                                    <img src="/img/ava.jpeg" alt=""
                                         className="img-fluid rounded-circle shadow-1 mb-3" />
                                </a>
                                <h6 className="mb-0 text-white text-shadow-dark">Username</h6>
                                <span className="font-size-sm text-white text-shadow-dark">email@gmail.com</span>
                            </div>

                            <div className="sidebar-user-material-footer">
                                <a href="#user-nav" className="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle" data-toggle="collapse">
                                    <span>Мій аккаунт</span>
                                </a>
                            </div>
                        </div>
                        <div className="collapse" id="user-nav">
                            <ul className="nav nav-sidebar">
                                <li className="nav-item">
                                    <a className="nav-link"><i className="icon-user-plus"/><span>My profile</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><i className="icon-coins"/><span>My balance</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <i className="icon-comment-discussion"/><span>Messages</span>
                                        <span className="badge bg-teal-400 badge-pill align-self-center ml-auto">58</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><i className="icon-cog5"/><span>Account settings</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><i className="icon-switch2"/><span>Logout</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card card-sidebar-mobile">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">
                            <li className="nav-item-header">
                                <div className="text-uppercase font-size-xs line-height-xs">Основне меню</div>
                                <i className="icon-menu" title="Main"/>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/dashboard" className="nav-link" activeClassName="active">
                                    <i className="icon-home4"/><span>Інфопанель</span>
                                </NavLink>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className={classesForFirstLevel('/dashboard/cms')}><i className="icon-stack2"/><span>CMS</span></a>
                                <ul className="nav nav-group-sub" data-submenu-title="CMS">
                                    <SubMenuLink to="/dashboard/cms/menu"       title="Меню" />
                                    <SubMenuLink to="/dashboard/cms/pages"      title="Сторінки" />
                                    <SubMenuLink to="/dashboard/cms/blocks"     title="Блоки" />
                                    <SubMenuLink to="/dashboard/cms/ads"        title="Реклама" />
                                    <SubMenuLink to="/dashboard/cms/news"       title="Новини" />
                                    <SubMenuLink to="/dashboard/cms/dictionary" title="Довідники" />
                                    <SubMenuLink to="/dashboard/cms/dictionary" title="Словники" />
                                    <SubMenuLink to="/dashboard/cms/settings"   title="Налаштування" />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="icon-people"/><span>Користувачі</span></a>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dashboard/banks" className="nav-link" activeClassName="active">
                                    <i className="icon-briefcase"/><span>Банки</span>
                                </NavLink>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link">
                                    <i className="icon-server"/><span>Конструктор</span>
                                </a>
                                <ul className="nav nav-group-sub" data-submenu-title="Конструктор">
                                    <SubMenuLink to="/dashboard/page" title="Заяви" />
                                    <SubMenuLink to="/dashboard/page" title="Опитування" />
                                    <SubMenuLink to="/dashboard/page" title="Графіки" />
                                    <SubMenuLink to="/dashboard/page" title="Діаграми" />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="icon-file-text2"/><span>Звіти</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="icon-envelop2"/><span>Пошта</span></a>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link"><i className="icon-wrench3"/><span>Налаштування</span></a>
                                <ul className="nav nav-group-sub" data-submenu-title="Налаштування">
                                    <SubMenuLink to="/dashboard/page" title="Ролі" />
                                    <SubMenuLink to="/dashboard/page" title="Дозволи" />
                                    <SubMenuLink to="/dashboard/page" title="Локалізація" />
                                    <SubMenuLink to="/dashboard/page" title="Сервер" />
                                    <SubMenuLink to="/dashboard/page" title="Обмеження" />
                                    <SubMenuLink to="/dashboard/page" title="" />
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const f = state => ({pathname: state.router.location.pathname});
export default connect(f)(Sidebar);
