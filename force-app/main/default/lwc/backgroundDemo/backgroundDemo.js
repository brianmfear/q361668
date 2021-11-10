import { api, LightningElement } from 'lwc';

export default class BackgroundDemo extends LightningElement {
    _background;
    @api set background(value) {
        this._background = value;
        this.update();
    }
    get background() { return this._background; }
    update() {
        this.template.querySelector('.background').style.setProperty('--background', `url(${this._background}`);
    }
}