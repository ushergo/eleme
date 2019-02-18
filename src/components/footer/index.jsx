import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.scss'
class Footer  extends Component {
    render() {
        {/*底部导航*/ }
        return (
            <div className={'index_foot_nav'}>
                <NavLink exact activeClassName={'active'} to={'/'}>
                    <i className={'iconfont  icon-changyonglogo40'}></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to={'/find'}>
                    <i className={'iconfont icon-faxian2'}></i>
                    <span>发现</span>
                </NavLink>
                <NavLink to={'/cart'}>
                    <i className={'iconfont icon-gouwuche'}></i>
                    <span>订单</span>
                </NavLink>
                <NavLink to={'/mine'}>
                    <i className={'iconfont icon-huiyuan-'}></i>
                    <span>我的</span>
                </NavLink>
            </div>
        );
    }
}

export default Footer;