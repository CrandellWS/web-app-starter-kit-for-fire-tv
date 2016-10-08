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
        devKey: "AIzaSyA7AUJZMxx4PPngptCblPxqMTfHdZt8EQA",
        showLatestChannel: true,
        channels: [
            {
                type: "playlist",
                id: "UUUovMgdLQrqaDq6n2oAgDOQ",
                title: "GioTheJedi"
            }
        ],
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
