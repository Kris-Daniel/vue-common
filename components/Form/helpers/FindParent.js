const FindParent = class {
    getParent(obj, name) {
        if (obj[name]) return obj;
        if (obj.$parent) return this.getParent(obj.$parent, name);
        return false;
    }
}

export default new FindParent();