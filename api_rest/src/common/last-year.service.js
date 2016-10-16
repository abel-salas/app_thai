exports.arrayLastYear = () => {
    return new Promise(function (resolve, reject) {
        var lastYear = [];
        var today = new Date();
        var searchMonth = today.getMonth() + 1;
        var searchYear = today.getYear() + 1900;

        for (var i = 12; i >= 0; i--) {
            if (searchMonth > 1) {
                searchMonth = searchMonth - 1;
            } else {
                searchMonth = 12;
                searchYear = searchYear - 1;
            }
            lastYear.push({
                'start': new Date(searchYear, searchMonth, 1),
                'end': new Date(searchYear, searchMonth, 31)
            })
        };
        resolve(lastYear);
    });
};