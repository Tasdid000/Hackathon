import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Demand from "./components/demand/Demand";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Header/Header";
import support from "./components/support";
import Businventory from "./Screens/Businventory";
import HomeScreen from "./Screens/HomeScreen";
import Staff from "./Screens/Staff";
import StudentBus from "./Screens/StudentsBus";
import Teacher from "./Screens/Teacher";
const MainComponents = () => {
    return (
        <div style={{overflow:"hidden"}}>
            <Headers/>
            <div style={{marginTop:"6%"}}>
                <Switch>
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/StudentBus" exact component={StudentBus}/>
                    <Route path="/TeacherBus" exact component={Teacher}/>
                    <Route path="/StaffBus" exact component={Staff}/>
                    <Route path='/Support' exact component={support} />
                    <Route path='/Demand' exact component={Demand} />
                    <Route path='/Businventory' exact component={Businventory} />
                    <Redirect to="/" />
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}
export default MainComponents;