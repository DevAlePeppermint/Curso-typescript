enum Permission {
    ADMIN = 3,
    USER = 7,
    READONLY = "Apenar reader"
}

console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
console.log(Permission["READONLY"]);

