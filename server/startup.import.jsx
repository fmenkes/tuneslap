import {clientID, clientSecret} from '/server/keys';

Meteor.startup(function() {
    ServiceConfiguration.configurations.update(
        { "service": "spotify" },
        {
            $set: {
                "clientId": clientID,
                "secret": clientSecret
            }
        },
        { upsert: true }
    );
});