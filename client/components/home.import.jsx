export default React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            user: Meteor.user()
        }
    },

    spotifyLogin() {
        var options = {
            showDialog: true,
            requestPermissions: ['user-read-private', 'user-read-email', 'playlist-modify-private']
        };

        Meteor.loginWithSpotify(options, function(err) {
            console.log(err || "OK");
        });
    },

    render() {
        return(
            <div>
                {!this.data.user?
                <div>
                    <p>Tuneslap is a playlist manager for Spotify. Please log in!</p>
                    <button className="btn" onClick={this.spotifyLogin}>Login with Spotify</button>
                </div> :
                <div>
                    <img className="img-thumbnail" src={this.data.user.profile.images[0].url} width="100" height="100"/>

                    <p>{this.data.user.profile.display_name} (<strong>{this.data.user.profile.id}</strong>)</p>
                    <button className="btn" onClick={this.logout}>Log out</button>
                </div>
                    }

            </div>
        );
    },

    logout() {
        Meteor.logout();
    }
});
