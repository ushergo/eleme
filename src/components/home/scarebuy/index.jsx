import React, {Component} from 'react';
import  {Link} from 'react-router-dom'
import './index.scss'
class ScareBuy extends Component {
    render() {
        {/*抢购*/ }
        return (
            <div className={'scarebuy pad20'}>
                <Link to="/scarebuy/list/1">
                    <img src={require('../../../static/img/scarebuy/1.png')}/>
                </Link>
                <Link to="/scarebuy/list/2">
                    <img src={require('../../../static/img/scarebuy/2.png')}/>
                </Link>
            </div>
        );
    }
}

export default ScareBuy;