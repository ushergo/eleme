import React, {Component} from 'react';
import './index.scss'
import Axios from 'axios'

class Location extends Component {
    constructor(){
        super()
        this.state ={
            city:""
        }
    }

    componentDidMount() {
        Axios.get('http://route.showapi.com/9-4',{
            params:{
                'showapi_appid':'69707',
                'showapi_sign':'74a7cb9669a74f939d8442c35d5f98a2'
            }
        }).then((res)=>{
            // console.log(res.data.showapi_res_body.cityInfo.c3)
            this.setState({
                city: res.data.showapi_res_body.cityInfo.c3
            })

        })
    }

    render() {
        return (
            <div>
                {/*定位*/}
                <div className={'location'}>
                    <div className={'sub'}>
                        <span className="dingwei iconfont icon-dingwei"></span>
                        <span className={'info'}>{this.state.city}</span>
                        <span className={'iconfont icon-sanjiaodown'}></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;