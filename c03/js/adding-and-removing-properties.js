// object literal notation
// this file is not linked to github yet as of 10.16.22
var hotel = {
name:"Maria's Cottage",
rooms:12,
booked:5,
cats:3,
parking_spots:4
};

hotel.gym = false;
hotel.pool = false;
hotel.fireplace = true;
hotel.breakfast = true;
delete hotel.parking_spots;

console.log(hotel.name);
console.log(hotel.parking_spots);

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;

var elCats = document.getElementById('cats');
elCats.className = hotel.cats;
// i added cats to the html but it does not work properly 

