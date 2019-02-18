import React, {Component} from 'react';
import Header from "../header";
import './index.scss'
import Footer from "../footer";
class Mine extends Component {
    render() {
        return (
            <div className={'my'}>
                <Header title={'我的'}/>

                {/*头像*/}
                <div className={'avatar'}>
                    <div className={'icon'}>
                        <img src={require('./img/icon.png')} alt=""/>
                    </div>
                    <div className={'userInfo'}>
                        <div className={'con'}>
                            <a href={'#'} className={'login'}>登录</a>
                            <span>/</span>
                            <a href={'#'} className={'regist'}>注册</a>
                        </div>
                        <div className={'desc iconfont icon-shouji2'}>
                            登录后享受更多特权
                        </div>
                    </div>
                    <div className={'arrow iconfont icon-arrow-right'}>
                    </div>
                </div>

                {/*积分信息*/}
                <div className={'creditInfo'}>
                    <a href="#">
                        <span className={'iconfont icon-money3'}></span> <p>钱包</p>
                    </a>
                    <a href="#">
                        <span className={'iconfont icon-hongbao'}></span> <p>红包</p>
                    </a>
                    <a href="#">
                        <span className={'iconfont icon-jinbi1'}></span>  <p>金币</p>
                    </a>
                </div>

                {/*导航列表*/}
                <div className={'mainInfo'}>
                    <a href={'#'} className={'infoList'}>
                        <span className={'icon iconfont icon-dingwei'}></span>
                        <span className={'title'}>我的定位</span>
                        <span className={'arrow iconfont icon-arrow-right'}></span>
                    </a>

                    <a href={'#'} className={'infoList'}>
                        <span className={'icon iconfont icon-jinbi1'}></span>
                        <span className={'title'}>金币商城</span>
                        <span className={'arrow iconfont icon-arrow-right'}></span>
                    </a>

                    <a href={'#'} className={'infoList'}>
                        <span className={'icon iconfont icon-liwu1'}></span>
                        <span className={'title'}>分享拿10元现金</span>
                        <span className={'arrow iconfont icon-arrow-right'}></span>
                    </a>

                    <a href={'#'} className={'infoList'}>
                        <span className={'icon iconfont icon-kefu'}></span>
                        <span className={'title'}>我的客服</span>
                        <span className={'arrow iconfont icon-arrow-right'}></span>
                    </a>

                    <a href={'#'} className={'infoList'}>
                        <span className={'icon iconfont icon-changyonglogo40'}></span>
                        <span className={'title'}>下载饿了么APP</span>
                        <span className={'arrow iconfont icon-arrow-right'}></span>
                    </a>
                </div>
                
                {/*底部*/}
                <Footer/>
            </div>
        );
    }
}

export default Mine;