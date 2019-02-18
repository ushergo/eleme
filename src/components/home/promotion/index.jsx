import React, {Component} from 'react';
import {Carousel} from 'antd'
import './index.scss'
class Promotion extends Component {
    render() {
        return (
            <div className={'promotion pad20'}>
                <Carousel autoplay>
                    <div className={'item'}>
                        <a href="#">
                            <img src={require('../../../static/img/promotion/1.webp')} alt=""/>
                        </a>
                    </div>
                    <div className={'item'}>
                        <a href="#">
                            <img src={require('../../../static/img/promotion/2.webp')} alt=""/>
                        </a>
                    </div>
                    <div className={'item'}>
                        <a href="#">
                            <img src={require('../../../static/img/promotion/3.webp')} alt=""/>
                        </a>
                    </div>
                    <div className={'item'}>
                        <a href="#">
                            <img src={require('../../../static/img/promotion/4.webp')} alt=""/>
                        </a>
                    </div>
                    <div className={'item'}>
                        <a href="#">
                            <img src={require('../../../static/img/promotion/5.webp')} alt=""/>
                        </a>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Promotion;