import React, {Component} from 'react';
import {Carousel} from 'antd'
import './index.scss'
import  Axios from 'axios'
class Promotion extends Component {

    state = {
        list : []
    }
    componentDidMount() {
        Axios.get('http://47.100.98.54:9019/api/promotion').then((res) => {
            console.log(res.data.data)
            this.setState({
                list: res.data.data
            })
        })
    }

    render() {
        return (
            <div className={'promotion pad20'}>
                <Carousel autoplay>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <div key={index} className={'item'}>
                                    <a href={"/promotionSub/"+item.id}>
                                        <img src={item.img} alt=""/>
                                    </a>
                                </div>
                            )
                        })
                    }
                    {/*<div className={'item'}>*/}
                        {/*<a href="#">*/}
                            {/*<img src={require('../../../static/img/promotion/1.webp')} alt=""/>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    {/*<div className={'item'}>*/}
                        {/*<a href="#">*/}
                            {/*<img src={require('../../../static/img/promotion/2.webp')} alt=""/>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    {/*<div className={'item'}>*/}
                        {/*<a href="#">*/}
                            {/*<img src={require('../../../static/img/promotion/3.webp')} alt=""/>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    {/*<div className={'item'}>*/}
                        {/*<a href="#">*/}
                            {/*<img src={require('../../../static/img/promotion/4.webp')} alt=""/>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    {/*<div className={'item'}>*/}
                        {/*<a href="#">*/}
                            {/*<img src={require('../../../static/img/promotion/5.webp')} alt=""/>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                </Carousel>
            </div>
        );
    }
}

export default Promotion;