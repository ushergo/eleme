import React, {Component} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './components/layout/index'
import Home from "./components/home";
import Search from "./components/search";
import CategoryList from "./components/home/categoryNav/categoryList";
import ScareBuyList from "./components/home/scarebuy/scarebuyList";
import Find from './components/find/index'
import Mine from './components/mine'
import GoodListSub from './components/home/goodListSub/index'
import PromotionSub from "./components/home/promotionSub";

class App extends Component {
    render() {
        return (
            <Router>
                <Layout className="Layout">
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/search'} component={Search}/>
                        <Route path={'/category/list:id'} component={CategoryList}/>
                        <Route path={'/scarebuy/list/:id'} component={ScareBuyList}/>
                        <Route path={'/find'} component={Find}/>
                        <Route path={'/mine'} component={Mine}/>
                        <Route path={'/goodListSub/:id'} component={GoodListSub}/>
                        <Route path={'/promotionSub/:id'} component={PromotionSub}/>
                    </Switch>
                </Layout>
            </Router>

        );
    }
}

export default App;
