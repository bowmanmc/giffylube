'use strict';

module.exports = function(ngModule) {

    ngModule.service('glEffectService', function() {

        this.filters = '';

        this.availableEffects = [{
            'id': 'brightness',
            'name': 'Brightness',
            'min': 0,
            'max': 5,
            'step': 0.05,
            'initialValue': 1
        }, {
            'id': 'blur',
            'name': 'Blur',
            'min': 0,
            'max': 5,
            'step': 0.05,
            'initialValue': 1
        }, {
            'id': 'contrast',
            'name': 'Contrast',
            'min': 0,
            'max': 5,
            'step': 0.05,
            'initialValue': 1
        }, {
            'id': 'grayscale',
            'name': 'Grayscale',
            'min': 0,
            'max': 5,
            'step': 0.05,
            'initialValue': 1
        }, {
            'id': 'hue',
            'name': 'Hue',
            'min': 0,
            'max': 5,
            'step': 0.05,
            'initialValue': 1
        }, {
            'id': 'invert',
            'name': 'Invert',
            'min': 0,
            'max': 5,
            'step': 0.05,
            'initialValue': 1
        }, {
            'id': 'saturate',
            'name': 'Saturate',
            'min': 0,
            'max': 5,
            'step': 0.05,
            'initialValue': 1
        }, {
            'id': 'sepia',
            'name': 'Sepia',
            'min': 0,
            'max': 5,
            'step': 0.05,
            'initialValue': 1
        }];

        this.getEffect = function(effectId) {
            return this.availableEffects.find(effect => effect.id === effectId);
        };

        this.updateFilters = function(brightness, contrast) {
            this.filters = `-webkit-filter: contrast(${contrast}) brightness(${brightness});`;
        };
    });
};
