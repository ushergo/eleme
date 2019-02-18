import React, {Component} from 'react';
import  {Icon,Input} from 'antd'
import './index.scss'

const SearchInput = Input.Search

class Search extends Component {
    render() {
        return (
            <div className={'search pad20'}>

                <div className={'top'}>
                    <Icon className={'back_icon'} type="left" theme={'outlined'} />
                    <div className={'search_txt'}>
                        <SearchInput
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </div>
                    <div style={{fontSize:".33rem"}}>搜索</div>
                </div>

                <div className={'hot_search'}>
                      <div className={'title'}>
                          热门搜索
                      </div>
                     <div className={'hot_goods'}>
                         <span>豆</span>
                         <span>煎饼</span>
                         <span>汤包</span>
                         <span>奶茶</span>
                         <span>亿户便利</span>
                         <span>寿司</span>
                         <span>鸡</span>
                         <span>烧烤</span>
                         <span>炸鸡</span>
                         <span>凉面</span>
                     </div>
                </div>
            </div>
        );
    }
}

export default Search;