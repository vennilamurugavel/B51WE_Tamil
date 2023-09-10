let obj_for=[{
    "fname":"vennila",
    "lastname":"baskaran",
    "age":25,
    "place":"dindigul"
}]
for(let i=0;i<obj_for.length;i++)
console.log(obj_for[i]);

let obj_forin={
    "house":"ownhouse",
    "typeofhouse":"apartment",
    "floor":"3rd floor"
}
for(var key in obj_forin)
{
console.log(key+":"+obj_forin[key])
}


let obj_forof=[{
    "Language":"tamil",
    "Food":"Veg",
    "visitedPlace":"Temple"
}]
for(var elements of obj_forof)
{
    console.log(elements);
}
let objeach=[{
    "Mathematics":"expert",
    "science":"intermediate",
    "programming":"beginner"
}]
objeach.forEach((details1,index)=>console.log(details1,index))
