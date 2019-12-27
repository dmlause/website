import React from 'react';
// import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';
import {withRouter, Route, Switch} from 'react-router-dom';
import About from '../components/pages/About';
import Shop from '../components/pages/Shop';
import Portfolio from '../components/pages/Portfolio';
import Contact from '../components/pages/Contact';
import Nav from '../components/layout/Nav';

class App extends React.Component {
    render() {
        return (
            <>
                <Nav/>
                <Container fluid className="root-container">
                    <Switch>
                        <Route exact path="/" component={About}/>
                        {/* <Route path="/content" component={Content}/> */}
                        <Route path="/shop" component={Shop}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </Container>
            </>
        );
    }
}

export default withRouter(App);