import React, {Component} from 'react';
import {Rate} from 'antd'
import {Link} from 'react-router-dom'
import './index.scss'

class RecommendGoodList extends Component {
    state = {
        list:  this.props.list
    }

    componentDidMount() {
        window.addEventListener('scroll', this.loadMore)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.list
        })
    }
    loadMore = () => {
        //获取加载更多元素的top值
        let element = this.refs.loadMore
        if (element) {
            let top = element.getBoundingClientRect().top
            console.log("top:",top);
            console.log("height:",window.screen.height);
            let windowHeight =  window.screen.height;
            if (top < windowHeight)
                this.props.loadMore()
        }
    }

    render() {
        return (
            <div className={'recommend pad20'}>
                {/*商品列表*/}
                <div className={'good_list'}>
                    <ul>
                        {
                            this.state.list && this.state.list.map((item, index) => {
                                return (
                                    <li>
                                        <Link to={'/goodListSub/' + index}>
                                            <div className={'item'}>
                                                <div className={'logo'}>
                                                    <img src={item.img}/>
                                                </div>
                                                <div className={'goods_info'}>
                                                    {/*标题*/}
                                                    <span className={'title'}>{item.title}</span>
                                                    {/*评分*/}
                                                    <div className={'evaluate'}>
                                                        <div className={'star'}>
                                                            <Rate count={6} defaultValue={item.ratingScore}></Rate>
                                                        </div>
                                                        <div className={'desc'}>
                                                            月售{item.monthSaleCount}单
                                                        </div>
                                                        <div className={'delivery'}>
                                                            {item.labels.map((item, index) => {
                                                                return (
                                                                    <span key={index}>{item.name}</span>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    {/*限额*/}
                                                    <div className={'moneylimit'}>
                                                        <div className={'left'}>
                                                            <span className={'start_price'}>¥{item.startPrice}起送</span>
                                                            <span>配送费¥{item.freightPrice}</span>
                                                        </div>
                                                        <div className={'right'}>
                                                            <span className={'start_distance'}>
                                                                {
                                                                    item.range > 1000 ? (item.range / 1000).toFixed(2) + "km" : item.range + "m"
                                                                }</span>
                                                            <span>{item.time}分钟</span>
                                                        </div>
                                                    </div>
                                                    {/*类型*/}
                                                    <div className={'type'}>
                                                        盖浇饭
                                                    </div>

                                                    {/*折扣*/}
                                                    <div className={'discount'}>
                                                        {
                                                            item.promotion.map((item, index) => {
                                                                let className = ["first", "second"][index % 2]
                                                                return (

                                                                    <div className={className} key={index}>
                                                                        <span>{item.type.name}</span>
                                                                        <span>{item.detail}</span>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        {/*<div className={'first'}>*/}
                                                        {/*<span>首</span>*/}
                                                        {/*<span>新用户下单立马减16元</span>*/}
                                                        {/*</div>*/}
                                                        {/*<div className={'second'}>*/}
                                                        {/*<span>满</span>*/}
                                                        {/*<span>满40减20，满20减10</span>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <div ref={'loadMore'}>加载更多...</div>
                    </ul>
                </div>
            </div>
        );
    }
}

//设置默认属性的好处，当有多个地方在使用本组件的时候，因为有些地方要判断某个属性
//而其他使用的地方还没有传递该属性，找不到，会报错，可以预先给定一个默认值。
// RecommendGoodList.defaultProps={
//     list:[]
// }

export default RecommendGoodList;