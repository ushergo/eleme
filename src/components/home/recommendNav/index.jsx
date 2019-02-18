import React, {Component} from 'react';
import './index.scss'
class RecommendNav extends Component {
    render() {
        return (
            <ul className={'recommendNav pad20'}>
                <li>综合排序</li>
                <li>距离最近</li>
                <li>品质联盟</li>
                <li>筛选</li>
            </ul>
        );
    }
}

export default RecommendNav;