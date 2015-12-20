export default React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            user: Meteor.user()
        }
    },

    render () {
        return (
            <nav className="navbar navbar-inverse navbar-tuneslap">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand navbar-logo" href="/">Tuneslap</a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        {this.data.user?
                        <ul className="nav navbar-nav navbar-right">

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">
                                    <img className="img-circle img-user-profile" src={this.data.user.profile.images[0].url}
                                         alt={this.data.user.profile.id} />
                                    {this.data.user.profile.id} <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Account</a></li>
                                    <li><a href="#" onClick={this.logout}>Log out</a></li>
                                </ul>
                            </li>
                        </ul> : ""
                            }
                    </div>
                </div>
            </nav>
        );
    },

    logout() {
        Meteor.logout();
    }
});