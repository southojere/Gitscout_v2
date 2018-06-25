import React from "react";

class UserCard extends React.Component {

    render() {
        return (
            <div class="page_content">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="languages">
                                <div>
                                    <p>Python</p>
                                </div>
                                <div>
                                    <p>Javascript  </p>
                                </div>
                                <div>
                                    <p>C#</p>
                                </div>
                                <div>
                                    <p>Ruby</p>
                                </div>
                            </div>
                            <div class="stats">
                                <div class="divider">
                                    <h4>Gist</h4>
                                    <p class="highlight"> 42</p>
                                </div>
                                <div class="divider">
                                    <h4>Repositories</h4>
                                    <p>12</p>
                                </div>
                                <div>
                                    <h4>Followers</h4>
                                    <p> 18</p>
                                </div>
                                <div>
                                    <h4>Following</h4>
                                    <p>10</p>
                                </div>
                            </div>
                            <div class="profile">
                                <h3>Jeremy Southon</h3><a href="http://www.github.com/southojere"> </a>
                                <p> Wellington, New Zealand.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}
export default UserCard;