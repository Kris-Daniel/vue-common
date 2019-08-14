const CalendarMixin = {
    created() {
        let parent = this.getParent(this, "calendarKey");
        this.CalendarStore = parent.CalendarStore;
    },
    methods: {
        getParent(obj, name) {
            if (obj[name]) return obj;
            if (obj.$parent) return this.getParentId(obj.$parent, name);
            return false;
        }
    },
}
export default CalendarMixin;