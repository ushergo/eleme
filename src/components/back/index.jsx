import React, {Component} from 'react';
import './index.scss'
class Back extends Component {
    handleBack= ()=>{
        window.history.go(-1)
    }
    render() {
        return (
                <div onClick={this.handleBack} className={'back iconfont icon-arrow1'}></div>
        );
    }
}

export default Back;