"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var user_info_component_1 = require("./components/user-info/user-info.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'user-info',
        component: user_info_component_1.UserInfoComponent
    }
];
exports.AppRouter = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map