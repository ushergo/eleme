import React, {Component} from 'react';
import './index.scss'

import Axios from 'axios';
import Back from "../../back";

class PromotionSub extends Component {
    state ={
        img:""
    }
    componentDidMount() {
        let id = this.props.match.params.id
        console.log(id);
        Axios.get('http://47.100.98.54:9019/api/promotionSub').then((res) => {
            console.log(res.data.data)
            this.setState({
                img: res.data.data[id].img
            })
        })
    }

    render() {
        return (
            <div className={'promtionSub'}>
                <Back/>
                <img src={this.state.img} alt=""/>
            </div>
        );
    }
}

export default PromotionSub;