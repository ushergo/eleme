import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.scss'
import RecommendGoodList from "../../recommendGoodList";
import RecommendNav from "../../recommendNav";
import Header from "../../../header";
import Axios from 'axios';

class CategoryList extends Component {
    state={
        list:[],
        cate: ['美食','甜品饮品','商超便利','预定早餐','果蔬生鲜','新店特惠','准时达','晚餐','汉堡薯条','包子粥店','鲜花蛋糕','麻辣烫','川香菜','披萨意面','异国料理'],
        is_loading:false

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        Axios.get('http://47.100.98.54:9019/api/category/list'+id).then((res)=>{
            console.log(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }

    getCate=()=>{
        // console.log(this, this.props.match.params.id);
        const id = this.props.match.params.id
        return this.state.cate[id]
    }

    loadMore= ()=>{
        if(this.state.is_loading)
            return
        this.setState({
            is_loading: true
        })

        Axios.get('http://47.100.98.54:9019/api/category/list'+this.props.match.params.id).then((res)=>{
            setTimeout(()=>{
                this.setState({
                    is_loading: false
                })
            },2000)
            this.setState({
                list:this.state.list.concat(res.data.data)
            })
        })
    }

    render() {
        return (
            <div className={'categoryList'}>
                <div className={'header'}>
                    <Header title={this.getCate()}/>
                    <div className={'search'}>
                        <Link to={'/search'}>
                            <i className={'iconfont icon-sousuo'}></i>
                            <span className={''}>输入商家、商品名称</span>
                        </Link>
                    </div>
                    <div className={'nav'}>
                        <div  className={'list'}>
                            <ul>
                                <li> <a className={'active'} href={'#'}>为你精选</a></li>
                                <li> <a href={'#'}>超市</a></li>
                                <li> <a href={'#'}>便利店</a></li>
                                <li> <a href={'#'}>槟榔</a></li>
                                <li> <a href={'#'}>熟食</a></li>
                                <li> <a href={'#'}>饮用水</a></li>
                                <li> <a href={'#'}>牛奶</a></li>
                                <li> <a href={'#'}>地方菜系</a></li>
                                <li> <a href={'#'}>汉堡披萨</a></li>
                                <li> <a href={'#'}>香锅冒菜</a></li>
                                <li> <a href={'#'}>轻食西餐</a></li>
                            </ul>
                        </div>
                        <div className={'icon iconfont icon-arrow-down'}></div>
                    </div>
                </div>

                {/*导航*/}
                <RecommendNav/>

                {/*商品列表*/}
                {
                    this.state.list.length>0 &&  <RecommendGoodList loadMore={this.loadMore} list = {this.state.list}/>
                }

            </div>
        );
    }
}

export default CategoryList;