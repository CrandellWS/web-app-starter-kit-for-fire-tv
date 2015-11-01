(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: false,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "Udacity",
        devKey: "AIzaSyDDGWWelwvZP05bidvXR5NR1TU6pUG-dZw",
        showLatestChannel: true,
        channels: [
            {
                type: "playlist",
                id: "PLBxMIgvbjWQgVJt7SCyW6v779EQgt6AlP",
                title: "Lesson 0 - Udacity - Programming Foundations with Python"
            },
            {
                type: "playlist",
                id: "PLBxMIgvbjWQi2B3cyOopGJJntd9NDC3iX",
                title: "Lesson 1 - Udacity - Programming Foundations with Python"
            },
            {
                type: "playlist",
                id: "PLBxMIgvbjWQh8zCPh-L9wz8NH12UPugOE",
                title: "Lesson 2 - Udacity - Programming Foundations with Python"
            },
            {
                type: "playlist",
                id: "PLBxMIgvbjWQgmvBhmcSOAWGKM3-9XAfBn",
                title: "Lesson 3 - Udacity - Programming Foundations with Python"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
