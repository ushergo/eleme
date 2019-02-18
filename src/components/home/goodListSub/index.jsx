import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.scss'
import Back from "../../back";

class GoodListSub extends Component {
    render() {
        return (
            <div className={'shopList'}>
                <Back/>
                <div className={'shopContent'}>
                    <div className={'hd'}>
                            <div className={'shopIcon'}>
                            <img src={require('./img/shopIcon.webp')} alt=""/>
                        </div>
                    </div>

                    <div className={'shopTitle'}>
                        <div className={'title'}>亚布力烧烤</div>
                        <div className={'comment'}>
                            <span>评价4.7</span>
                            <span>月售3221单</span>
                            <span>蜂鸟快送约35分钟</span>
                        </div>
                        <div className={'cash'}>
                            <img src={require('./img/money.png')} alt=""/>
                        </div>
                        <div className={'newuser'}>
                            <span className={'first'}>首单</span>
                            <span className={'reduce'}>新用户下单立减14元（不参与其他活动）</span>
                            <span>10个优惠</span>
                        </div>
                        <div className={'tip'}>
                            公告：餐厅是我的事业，口味是我的职业。您满足是我们的追求。亚布力烧烤欢迎您。
                        </div>
                    </div>

                    <div className={'foodList'}>
                        <ul>
                            <li>
                                <div className={'foodImg'}>
                                    <img src={require('./img/1.jpeg')} alt=""/>
                                </div>
                                <div className={'foodInfo'}>
                                    <div>
                                        <h2 className={'title'}>招牌大鸡腿</h2>
                                        <p className={'material'}>
                                            主要原料：鸡腿
                                        </p>
                                        <p className={'niceRemark'}>
                                            <span>月售19324份</span>
                                            <span>好评99%</span>
                                        </p>
                                    </div>
                                    <div className={'price'}>
                                        <div className={'money'}>￥12</div>
                                        <div className={'addRemove'}>
                                            <span className={'remove iconfont icon-jianshao1'}></span>
                                            <span className={'num'}>2</span>
                                            <span className={'add iconfont icon-xinzeng'}></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'buyCart'}>
                    <div className={'cart'}>
                        <div className={'cartIcon iconfont icon-gouwuche'}>
                            <span className={'num'}>1</span>
                        </div>

                        <div className={'countPrice'}>￥<span>100</span></div>
                    </div>

                    <a href={'#'} className={'buy'}>去结算</a>
                </div>
            </div>
        );
    }
}

export default GoodListSub;