var v = {
    id: 1,
    name: "sameer",
    city: "ubl",
    pincode: 567827,
    display: function () {
        console.log("error aa gya bhai");
    }
};
console.log('json implementation--------------');
console.log("hi me hu " + v.name + " aur me " + v.city + " ka rehne wala hu");
var Manager = /** @class */ (function () {
    function Manager(id, name, city, pincode) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
    }
    Manager.prototype.display = function () {
        console.log("hi me hu " + this.name + " aur me " + this.city + " ka rehne wala hu");
    };
    return Manager;
}());
console.log('employee ka implementation-------------------');
var employee = new Manager(1, 'farvej', 'bnegaluru', 560091);
employee.display();
