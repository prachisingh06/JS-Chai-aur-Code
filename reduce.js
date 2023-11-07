const mynums =[1,2,3,4,]

const mytotal =mynums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval : ${currval}`);
    return acc+currval
},0)

console.log(mytotal);

const mytotal1= mynums.reduce((acc,curr) =>acc+curr,0)
console.log(mytotal);

const shopingcart=
[
    {
        itemname:"js course",
        price:2999,
    },
    {
        itemname:"css course",
        price:3999,
    },
    {
        itemname:"py course",
        price:1999,
    },
    {
        itemname:"java course",
        price:2009,
    },
    {
        itemname:"data science course",
        price:12999,
    },
]

const priceday= shopingcart.reduce(( acc,item)=> acc + item.price,0)


console.log(priceday);