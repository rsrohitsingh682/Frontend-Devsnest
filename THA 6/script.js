//  QUESTION 1 : Write a JavaScript program to list the properties of a JavaScript object. 
// Sample object: var student = { name : "David Rayy", sclass : 
// "VI", rollno : 12 }; Sample Output: name,sclass,rollno

function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(_keys({name : "Rohit Singh", Year: "3rd", rollno: "38"}));

// QUESTION2. : Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

var student =  { 
  name : "Rohit Singh", 
  year : "3rd year", 
  rollno : 38 };
console.log(student);
delete student.rollno;
console.log(student);


// QUESTION 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "Rohit Singh", 
year : "3rd year", 
rollno : 38 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);

// QUESTION 4. Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of
// the following books. var library = [ { author: 'Bill Gates',
// title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs'
// , title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne 
//  Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 


var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

// QUESTION 5. Write a JavaScript program to get the volume of a Cylinder
// with four decimal places using object classes. Volume of a cylinder
// : V = πr2h where r is the radius and h is the height of the cylinder. 
// Try To Attempt : Difficult Level Increased 

function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));


// QUESTION 6. Write a JavaScript program to sort an array of JavaScript objects. 
// Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates',
//  libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
//  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', 
//   libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson",
//  libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", 
//    libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object]
// { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       libraryID: 1254
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

var sort_by = function(field_name, reverse, initial){

   var key = initial ?
       function(x)
             {
               return initial(x[field_name]);
             } :
       function(x) 
             {
               return x[field_name];
             };

   reverse = !reverse ? 1 : -1;

   return function (x, y) {
       return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
     } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);