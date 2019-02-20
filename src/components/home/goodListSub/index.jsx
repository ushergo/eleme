import React, {Component} from 'react';
import './index.scss'
import Back from "../../back";

import Axios from 'axios'

import {connect} from 'react-redux'

class GoodListSub extends Component {

    state = {
        list: {},
        product: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        Axios.get('http://47.100.98.54:9019/api/detail/' + id).then((res) => {
            this.setState({
                list: res.data,
                product: res.data.product
            })
        })

    }

    getMonthSale = () => {
        let arr_count = []
        let list = this.state.product
        list.map((item, index) => {
            const num = []
            item.list.map((item, index) => {
                num.push(item.foodsale)
            })

            let count = num.reduce((pre, next) => {
                return pre + next
            })
            arr_count.push(count)
        })

        if (arr_count.length > 0) {
            let all = arr_count.reduce((pre, next) => {
                return pre + next
            })
            console.log(all);
            return all
        }

    }


    render() {
        console.log('count = ',this.props.count);
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
                        <div className={'title'}>{this.state.list.title}</div>
                        <div className={'comment'}>
                            <span>评价{this.state.list.foodScore}</span>
                            <span>月售{this.getMonthSale()}单</span>
                            <span>蜂鸟快送约{this.state.list.foodTime}分钟</span>
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
                            公告：{this.state.list.notice} 餐厅是我的事业，口味是我的职业。您满足是我们的追求。亚布力烧烤欢迎您。
                        </div>
                    </div>

                    <div className={'foodList'}>

                        {
                            this.state.product.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        {
                                            item.list.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <div className={'foodImg'}>
                                                            <img src={item.img} alt=""/>
                                                        </div>
                                                        <div className={'foodInfo'}>
                                                            <div>
                                                                <h2 className={'title'}>{item.foodTitle}</h2>
                                                                <p className={'material'}>
                                                                    主要原料：{item.fooddescription}
                                                                </p>
                                                                <p className={'niceRemark'}>
                                                                    <span>月售{item.foodsale}份</span>
                                                                    <span>好评{item.foodrating}%</span>
                                                                </p>
                                                            </div>
                                                            <div className={'price'}>
                                                                <div className={'money'}>￥{item.foodprice}</div>
                                                                <div className={'addRemove'}>
                                                                    <span
                                                                        className={'remove iconfont icon-jianshao1'}
                                                                        onClick={(val)=>{return this.props.reduceCount(1)}}
                                                                    ></span>
                                                                    <span className={'num'}>{this.props.count}</span>
                                                                    <span
                                                                        className={'add iconfont icon-xinzeng'}
                                                                        onClick={(val)=>{return this.props.addCount(1)}}
                                                                    ></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            })
                        }


                        {/*<ul>*/}
                        {/*<li>*/}
                        {/*<div className={'foodImg'}>*/}
                        {/*<img src={require('./img/1.jpeg')} alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className={'foodInfo'}>*/}
                        {/*<div>*/}
                        {/*<h2 className={'title'}>招牌大鸡腿</h2>*/}
                        {/*<p className={'material'}>*/}
                        {/*主要原料：鸡腿*/}
                        {/*</p>*/}
                        {/*<p className={'niceRemark'}>*/}
                        {/*<span>月售19324份</span>*/}
                        {/*<span>好评99%</span>*/}
                        {/*</p>*/}
                        {/*</div>*/}
                        {/*<div className={'price'}>*/}
                        {/*<div className={'money'}>￥12</div>*/}
                        {/*<div className={'addRemove'}>*/}
                        {/*<span className={'remove iconfont icon-jianshao1'}></span>*/}
                        {/*<span className={'num'}>2</span>*/}
                        {/*<span className={'add iconfont icon-xinzeng'}></span>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        {/*</li>*/}
                        {/*</ul>*/}
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

const mapStateToProps = (state) => {
    return {
       count: state.cartCount.count
    }
}
const mapDispatchToProps = {
    addCount: (param) => {
            return {
                type:"ADD",
                count:param
            }
        },
    reduceCount:(param)=>{
        return{
            type:"REDUCE",
            count: param
        }
    }
}

GoodListSub = connect(mapStateToProps,mapDispatchToProps)(GoodListSub)
export default GoodListSub;