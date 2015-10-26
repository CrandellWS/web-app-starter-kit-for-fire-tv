(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "amazonwebservices",
        devKey: "AIzaSyDK6c2yXyxpiKjoYWIlo5vYFOMYIK9CA50",
        showLatestChannel: true,
        channels: [
            {
                type: "playlist",
                id: "PLBxMIgvbjWQi2B3cyOopGJJntd9NDC3iX",
                title: "Lesson 1 - Nanodegree - Programming Foundations with Python"
            },
            {
                type: "playlist",
                id: "PLBxMIgvbjWQh8zCPh-L9wz8NH12UPugOE",
                title: "Lesson 2 - Nanodegree - Programming Foundations with Python"
            },
            {
                type: "playlist",
                id: "PLBxMIgvbjWQgmvBhmcSOAWGKM3-9XAfBn",
                title: "Lesson 3 - Nanodegree - Programming Foundations with Python"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
