import { api, LightningElement } from 'lwc';

export default class BackgroundDemo extends LightningElement {
    @api background;
    renderedCallback() {
        this.template.querySelector('.background')?.style.setProperty('--background', `url(${this.background}`);
    }
}