import React, {Component} from 'react';

import  './index.scss'
class Find extends Component {
    render() {
        return (
            <div className={'find'}>
                <div className={'findVideo'}>
                    <div className={'videoCon'}>
                        <div className={'con'}>
                            <video width={'100%'} height={'100%'} autoPlay muted src="https://app-builder-resource.oss-cn-shanghai.aliyuncs.com/prod/uploadckjn5re0ra.mp4"></video>
                        </div>
                    </div>
                </div>
                <div className={'aMap'}></div>
            </div>
        );
    }
}

export default Find;