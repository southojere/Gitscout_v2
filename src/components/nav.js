import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Nav extends React.Component {
    render() {
        return (<div class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">
                <b>GitScout</b>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline" name="filter" method="post">
                    <div class="form-group" id="locationFilter">
                        <label for="filterby">Filter by</label>
                        <input type="filterby" class="form-control mr-sm-2" type="text" placeholder="Location" aria-label="Search" name="Location"></input>
                    </div>
                    <div class="form-group" id="langDropDown">
                        <select class="form-control" id="selLanguage" name="Lang">
                            <option value="JavaScript">JavaScript</option>
                            <option value="Java">Java</option>
                            <option value="C">C</option>
                            <option value="C#">C#</option>
                            <option value="C++">C++</option>
                            <option value="Python">Python</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Rust">Rust</option>
                            <option value="Elm">Elm</option>
                        </select>
                    </div>
                    <div class="form-group" id="checkBoxes">
                        <label class="radio-inline">
                            <input type="checkbox" name="Gist"/>Gist
                        </label>
                        <label class="radio-inline">
                            <input type="checkbox" name="Repo"/>Repositories
                        </label>
                        <label class="radio-inline">
                            <input type="checkbox" name="Contribtions"/>Contribtions
                        </label>
                        <label class="radio-inline">
                            <input type="checkbox" name="Followers"/>Followers
                        </label>
                    </div>

                    <button type="button" class="btn btn-default" onclick="filterData()">
                        <span class="glyphicon glyphicon-search"></span> Search
                    </button>
                </form>
            </div>
        </div>);
    }
}
export default Nav;