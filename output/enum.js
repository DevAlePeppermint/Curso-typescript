"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 3] = "ADMIN";
    Permission[Permission["USER"] = 7] = "USER";
    Permission["READONLY"] = "Apenar reader";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
console.log(Permission["READONLY"]);
//# sourceMappingURL=enum.js.map