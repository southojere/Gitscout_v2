//main file
//wrapper component, which wil contain other components 
import React from "react";
import UserCard from "./components/UserCard";
import Nav from "./components/nav"
class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <UserCard />
            </div>
        );
    }
}
export default App;