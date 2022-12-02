
   (function() {
   var hotel = {
        name:'Park',
        roomRate:240,
        discount:15, // percentage discount
        offerPrice: function() {
            var discountDollar = ((this.discount/100) * this.roomRate)
            var offerRate = this.roomRate - discountDollar
            return offerRate;
        }
    };
    
    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$'+ hotel.offerPrice();

    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        // Add 7 days time in milliseconds
        weekFromToday = new Date(today.getTime() + 7 * 24 *60 *60 * 1000);
        // Create an array to hold the names of days/months
        dayNames = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames=['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September','Ocotber','November','December'];
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year +')';
        return expiryMsg;
    }
        today = new Date();
        elEnds = document.getElementById('offerEnds');
        elEnds.innerHTML = offerExpires(today);
    }());

    