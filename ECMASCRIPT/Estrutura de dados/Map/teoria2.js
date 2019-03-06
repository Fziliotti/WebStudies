// Using Map.prototype.set(k, v) 
// creating an empty map 
var map1 = new Map(); 
  
// adding some elements to the map  
map1.set("first name", "sumit"); 
map1.set("last name", "ghosh"); 
map1.set("website", "geeksforgeeks") 
    .set("friend 1","gourav") 
    .set("friend 2","sourav"); 
  
// map1 contains  
// "first name" => "sumit" 
// "last name" => "ghosh" 
// "website" => "geeksforgeeks" 
// "friend 1" => "gourav" 
// "friend 2" => "sourav" 
console.log(map1); 
      
// Using Map.prototype.has(k) 
  
// retuns true 
console.log("map1 has website ? "+  
                    map1.has("website")); 
  
// return false 
console.log("map1 has firend 3 ? " +  
                    map1.has("friend 3")); 
      
  
// Using Map.prototype.get(k) 
  
// returns geeksforgeeks 
console.log("get value for key website "+ 
                    map1.get("website")); 
  
// returns undefined 
console.log("get value for key friend 3 "+ 
                    map1.get("friend 3")); 
  
// Using Map.prototype.delete(k) 
  
// removes key "website" and its value from  
// the map  
// it prints the value of the key 
console.log("delete element with key website " 
                    + map1.delete("website")); 
      
// as the value is deleted from  
// the map hence it returns false 
console.log("map1 has website ? "+  
                    map1.has("website")); 
  
// returns false as this key is not in the list 
console.log("delete element with key website " + 
                    map1.delete("friend 3")); 
  
  
// Using Map.prototype.clear() 
// removing all values from map1  
map1.clear(); 
  
// map1 is empty 
console.log(map1); 