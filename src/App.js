import React from 'react';
import MainPage from "./components/main-page-structure/main-page-structure";
import MainPageGrid from "./components/grids/main-page-grid";


const App = () => {

    return (
        <>
            <MainPage include={<MainPageGrid/>}/>

        </>
    )

}

export default App