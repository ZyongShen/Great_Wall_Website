export default class {
    constructor() {

    }

    setTitle(title) {
        document.title = title;
    }

    // This will be overridden
    async getHtml() {
        return "";
    }
}