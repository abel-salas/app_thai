/**
 * Created by abel on 8/10/16.
 */
const User = require("../model/model-user.js");

exports.numberNewUsers = () => {
    return new Promise(function (resolve, reject) {
        const oneMonthTimestamp = 2599199999;
        const oneYearTimestamp = 31190400000;
        var objStatistics = {};
        var today = new Date();
        var todayTimestamp = today.getTime();
        var oneMonthBefore = new Date(todayTimestamp - oneMonthTimestamp);
        var oneYearBefore = new Date(todayTimestamp - oneYearTimestamp);

        var Xmonth = today.getMonth();
        var Xyear = today.getYear();
        var Xdate = today.getDate();

        var initCurrentMonth = new Date(Xyear + 1900, Xmonth, 1);
        var finalCurrentMonth = new Date(Xyear + 1900, Xmonth, 31);

        var initCurrentYear = new Date(Xyear + 1899, 0, 1);
        var finalCurrentYear = new Date(Xyear + 1899, 12, 30);

        oneMonthFilter(initCurrentMonth, finalCurrentMonth).then(res => {
            objStatistics.newUsersLastMonth = res;
            oneYearFilter(initCurrentYear, finalCurrentYear).then(res => {
                objStatistics.newUsersLastYear = res;
                totalFilter().then(res => {
                    objStatistics.totalUsers = res;
                    resolve(objStatistics)
                })
            });
        });
    });
};

oneMonthFilter = (start, end) => {
    return new Promise(function (resolve, reject) {
        User.find({
                "created": {
                    "$gte": start,
                    "$lt": end
                }
            }, function (err, data) {
                resolve(data.length)
        });
    });
};

totalFilter = () => {
    return new Promise(function (resolve, reject) {
        User.find({}, function (err, data) {
            resolve(data.length)
        });
    });
};

oneYearFilter = (start, end) => {
    return new Promise(function (resolve, reject) {
        User.find({
            "created": {
                "$gte": start,
                "$lt": end
            }
        }, function (err, data) {
             resolve(data.length)
        });
    });
};