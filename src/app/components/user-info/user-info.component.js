"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserInfoComponent = (function () {
    function UserInfoComponent() {
        this.userInfo = {
            name: 'Sandeep',
            email: 'sandeep@xyz.in',
            age: 31,
            address: {
                street: '121',
                city: 'New York',
                state: 'NY'
            },
            hobbies: ['Cricket', 'Music', 'News']
        };
        this.showUserHobbies = false;
    }
    UserInfoComponent.prototype.toggleUserHobbies = function () {
        this.showUserHobbies = !this.showUserHobbies;
    };
    UserInfoComponent.prototype.addHobby = function (hobby) {
        this.userInfo.hobbies.push(hobby);
    };
    UserInfoComponent.prototype.deleteHobby = function (hobbyIndex) {
        this.userInfo.hobbies.splice(hobbyIndex, 1);
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    core_1.Component({
        selector: 'user-info',
        templateUrl: './user-info.component.html'
    }),
    __metadata("design:paramtypes", [])
], UserInfoComponent);
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=user-info.component.js.map