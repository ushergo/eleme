import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import  './index.scss'
class FixTop extends Component {
    render() {
        {/*吸顶盒搜索框*/}
        return (
                <div className={'fix_top'}>
                    <Link to={'/search'}>
                        <i className={'iconfont icon-sousuo'}></i>
                        <span className={''}>搜索输入的商品名称</span>
                    </Link>
                </div>
        );
    }
}

export default FixTop;