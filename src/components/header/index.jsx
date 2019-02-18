import React, {Component} from 'react';
import './index.scss'
import Back from "../back";
class Header extends Component {

    render() {
        return (
            <div className={'head'}>
                <Back/>
                <span className={'title'}>{this.props.title}</span>
            </div>
        );
    }
}

Header.defaultProps = {
    title : '美食'
}
export default Header;