import Home from './Home.vue';

frappe.provide('frappe.PosApp');


frappe.PosApp.posapp = class {
    constructor({ parent }) {
        this.$parent = $(document);
        this.page = parent.page;
        this.make_body();

    }
    make_body () {
        this.$el = this.$parent.find('.main-section');
        this.vue = new Vue({
            vuetify: new Vuetify(
                {
                    rtl: frappe.utils.is_rtl(),
                    theme: {
                        themes: {
                            light: {
                                background: '#FFFFFF',
                                primary: '#820000',
                                secondary: '#F8D256',
                                accent: '#9575CD',
                                success: '#66BB6A',
                                info: '#2196F3',
                                warning: '#FF9800',
                                error: '#E86674',
                                orange: '#22201B',
                                golden: '#A68C59',
                                badge: '#F5528C',
                                customPrimary: '#820000',
                            },
                        },
                    },
                }
            ),
            el: this.$el[0],
            data: {
            },
            render: h => h(Home),
        });
    }
    setup_header () {

    }

};
