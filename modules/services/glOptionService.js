'use strict';

module.exports = function(ngModule) {

    ngModule.service('glOptionService', function() {

        this.selected = {
            image: 'elephant.gif'
        };

        this.available = {
            images: [
                'coding.gif',
                'eating2hands.gif',
                'elephant.gif',
                'geo.tiff',
                'robots.gif',
                'watermelon-of-pain.gif',
                'woody.gif',
                'word.jpg'
            ]
        };

    });
};
