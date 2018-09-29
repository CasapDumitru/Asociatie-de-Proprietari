System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserType;
    return {
        setters: [],
        execute: function () {
            (function (UserType) {
                UserType[UserType["Admin"] = 1] = "Admin";
                UserType[UserType["Tenant"] = 2] = "Tenant";
            })(UserType || (UserType = {}));
            exports_1("UserType", UserType);
        }
    };
});
//# sourceMappingURL=userType.js.map