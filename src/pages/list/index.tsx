import React from "react";
import {
    Route, Routes,
} from "react-router-dom";


import UserList from './UserList'
import WorkList from './WorkList'
import TableList from "./tableList";


const Index: React.FC = () => {

    return (
        <Routes>
            {/*<Route path="/home/list">*/}
            {/*  <Redirect to="/home/list/UserList" />*/}
            {/*</Route>*/}
            <Route
                path="/home/list/UserList"
                element={<UserList/>}
            />
            <Route
                path="/home/list/WorkList"
                element={<WorkList/>}
            />
            <Route
                path="/home/list/TableList"
                element={<TableList/>}
            />
        </Routes>
    );
};

export default Index;
