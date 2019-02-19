import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './index.scss'

import Location from './location/index'
import FixTop from "./fixTop";
import CategoryNav from "./categoryNav";
import ScareBuy from "./scarebuy";
import Promotion from "./promotion";
import RecommendGoodList from "./recommendGoodList";
import Footer from "../footer";
import RecommendNav from "./recommendNav";
import Axios from "axios";

class Home extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        Axios.get('http://47.100.98.54:9019/api/shoplist').then((res) => {
            console.log(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }

    loadMoreFn = () => {
        Axios.get('http://47.100.98.54:9019/api/shoplist').then((res) => {
            console.log(res.data.data)
            this.setState({
                list: this.state.list.concat(res.data.data)
            })
        })
    }


    render() {
        return (
            <div className={'App'}>
                {/*定位*/}
                <Location/>
                {/*吸顶盒搜索框*/}
                <FixTop/>
                {/*分类导航*/}
                <CategoryNav/>
                {/*抢购*/}
                <ScareBuy/>
                {/*促销*/}
                <Promotion/>
                {/*推荐*/}
                <div className={'recommendIcon pad20'}>
                    <img src={require('../../static/img/recommend/1.jpg')} alt=""/>
                </div>
                {/*导航*/}
                <RecommendNav/>

                {/*商品列表*/}
                <RecommendGoodList loadMore={this.loadMoreFn} list={this.state.list}/>

                {/*底部导航*/}
                <Footer/>
            </div>


        );
    }
}

export default Home;