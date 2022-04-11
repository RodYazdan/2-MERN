var Arr=[0,1,2,3,4];
newValue= 5;
function pushFront(Arr,newValue)
{
    var newArr=[];
    newArr[0]=newValue;
    for ( var i=0; i<Arr.length; i += 1 )
    {
        newArr.push(Arr[i]);
    }
    console.log("Old Array: "+ Arr);
    console.log("New Array: " + newArr);
    return newArr;
}
console.log("***************push function**********");
pushFront(Arr,newValue);
//********************************************* */
var Arr=[5,0,1,2,3,4];

function popFront(Arr)
{
    var newArr=[];
    for ( var i=0; i<Arr.length-1; i += 1 )
    {
        newArr[i]=Arr[i+1];
    }
    console.log("Old Array: "+ Arr);
    console.log("New Array: " + newArr);
    return newArr;
}
console.log("***************pop function**********");
popFront(Arr);
//********************************************* */
var Arr=[0,1,2,3,4];
newValue= 5;
index =3
function insert(Arr,index,newValue)
{
    var newArr=[];
    // shift elements forward
    for (var i = Arr.length; i >= index ; i -= 1)
    {
        newArr[i] = Arr[i - 1];

    }
    for (var i = index; i >= 0 ; i -= 1)
    {
        newArr[i] = Arr[i];

    }
    newArr[index]=newValue;
    console.log("Old Array: "+ Arr);
    console.log("New Array: " + newArr);
    return newArr;
}
console.log("***************insert function**********");
insert(Arr,index,newValue);
//********************************************* */