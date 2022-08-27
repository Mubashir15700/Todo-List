//jshint esversion:6

exports.getDay = getDay;
    function getDay() {
        const today = new Date();

        const options = {
            weekday: "long" 
        }

        return today.toLocaleString("en-US", options);

    }
    

// exports.getDate = getDate;
//     function getDate() {
//         const today = new Date();

//         const options = {
//             weekday: "long",
//             day: "numeric",
//             month: "long" 
//         }

//         return today.toLocaleString("en-US", options);
    
//     }

//console.log(module.exports);
