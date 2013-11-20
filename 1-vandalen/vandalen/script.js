"use strict";

var makePerson = function (persArr) {

    var result = {
        names: "",
        minAge: 0,
        maxAge: 0,
        averageAge: 0
    };

    persArr.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    for (var i = 0; i < persArr.length; i++) {

        if (i < persArr.length - 1) {
            result.names += persArr[i].name + ", ";
        }
        else
            result.names += persArr[i].name;

        result.averageAge += persArr[i].age;
    }

    result.averageAge = Math.round(result.averageAge / persArr.length);
    
    result.maxAge = Math.max.apply(Math, persArr.map(function (o) { return o.age }));
    result.minAge = Math.min.apply(Math, persArr.map(function (o) { return o.age }));

    return result;
};
var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];

var result = makePerson(data);

console.log(result);

