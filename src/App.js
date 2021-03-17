import React from 'react';
import MainPage from "./components/main-page-structure/main-page-structure";
import MainPageGrid from "./components/pages/main-page-grid";
import ProfilePage from "./components/pages/profile-page";
import {Redirect, Route, Switch} from 'react-router-dom';


const App = () => {

    return (
        <>
            <Switch>
                <Route path='/swipe' > <MainPage include={<MainPageGrid/>}/></Route>
                <Route path='/profile' > <MainPage include={<ProfilePage/>}/></Route>
                <Route path='*' > <MainPage include={<MainPageGrid/>}/></Route>

            </Switch>
        </>
    )

}

export default App