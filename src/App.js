import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UsersHomePage from './components/users/UsersHomePage'
import HomePage from './components/home/HomePage'
import BlogsHomePage from './components/blogs/BlogsHomePage'

function App(){
    return(
        <BrowserRouter>
        <div id='App'>
            <Switch>
                <Route path='/blogs' component={BlogsHomePage}/>
                <Route path='/users' component={UsersHomePage}/>
                <Route path='/' component={HomePage}/>
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default App