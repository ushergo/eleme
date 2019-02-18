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

class Home extends Component {
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
                <RecommendGoodList/>

                {/*底部导航*/}
                <Footer/>
            </div>


        );
    }
}

export default Home;