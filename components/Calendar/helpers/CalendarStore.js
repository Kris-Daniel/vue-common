import Vue from "vue";
import CalendarService from "./CalendarService";
export default {
    name: 'CalendarStore',
    data: function () {
        return {
            currentDate: new Date(),
            state: 'month',
            weekCount: 6,
            yearId: false,
            monthId: false,
            dayId: false,
            from: false,
            to: false,
            checkedDays: {},
            defaultDays: {},
            options: {
                mondayFirst: true,
                multiselect: false
            },
            additional: {}
        }
    },
    methods: {
        setStore(options) {
            let timeStamp = this.currentDate.getTime();
            let y = this.currentDate.getFullYear();
            let m = this.currentDate.getMonth();
            this.yearId = y;
            this.monthId = CalendarService.getMonthId(y, m);
            this.dayId = CalendarService.getDayId(timeStamp);
            this.setStoreOptions(options);
            console.log(this._data);
        },
        setStoreOptions(options) {
            for(let prop in options) {
                if(prop == "options") {
                    for(let option in options[prop])
                        Vue.set(this.options, option, options[prop][option]);
                }
                else Vue.set(this, prop, options[prop])
            }
        }
    },
};