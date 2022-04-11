var Arr=[0,1,2,3,4];
function reverseArray(Arr)
{
    console.log("Old Array: "+ Arr);
    for ( var i=0; i<(Arr.length/2); i += 1 )
    {
        temp=Arr[i];
        Arr[i]=Arr[Arr.length-i-1];
        Arr[Arr.length-i-1]=temp;
    }
    console.log("New Array: " + Arr);
    return Arr;
}
console.log("***************reverse function**********");
reverseArray(Arr);

// *****************************************

var Arr=[0,1,2,3,4];
shiftBy=3;
function rotateArray(Arr,shiftBy)
{
    console.log("Old Array: "+ Arr);
    for (var j=0; j<shiftBy; j+=1)
    {
        temp=Arr[0];
        for ( var i=0; i<(Arr.length-1); i += 1 )
        {
            Arr[i]=Arr[i+1];   
        }
        Arr[Arr.length-1]=temp;
    }
    console.log("New Array: " + Arr);
    return Arr;
}
console.log("***************rotate function**********");
rotateArray(Arr,shiftBy);

// *****************************************

var Arr=[0,1,2,3,4,5,6,7,8];
min= 3;
max=5;

function filterRange(Arr,min,max)
{
    console.log("Old Array: "+ Arr);
    for ( var i=0; i<(Arr.length); i ++ )
    {
        if (Arr[i] < min || Arr[i] > max) 
        {
            for ( var j=i+1; j<Arr.length; j ++ )
            {
                Arr[j-1]=Arr[j];  
            }
            Arr.length--;
            i--
        }
    }
    console.log("New Array: " + Arr);
    return Arr;
}
console.log("***************filterRange function**********");
filterRange(Arr,min,max);

// *****************************************

// var Arr=[0,1,2,3,4,5,6,7,8];
// min= 3;
// max=5;

// function filterRange(Arr,min,max)
// {
//     console.log("Old Array: "+ Arr);
//     var nextInd =0 // Index where the next array value that is from min to max insclusively will go 
//     //loop the array
//     for ( var i=0; i<(Arr.length); i ++ )
//     {
//         if (Arr[i] >= min && Arr[i] <= max) 
//         {
//             Arr[nextInd]=Arr[i];   
//             nextInd++; //Increment index for next valid value found
//         }
//     }
//     Arr.length=nextInd // Chop off end of array
//     console.log("New Array: " + Arr);
//     return Arr;
// }
// console.log("***************filterRange function**********");
// filterRange(Arr,min,max);

// *****************************************

var Arr1=[0,1,2,3];
var Arr2=[4,5,6,7];
var Arr3=[]

function concat(Arr1,Arr2)
{
    console.log("Old Array 1: "+ Arr1);
    console.log("Old Array 2: "+ Arr2);
    for ( var i=0; i<(Arr1.length); i ++ )
    {
        Arr3.push(Arr1[i])
    }
    for ( var i=0; i<(Arr2.length); i ++ )
    {
        Arr3.push(Arr2[i])
    }
    console.log("New Array: " + Arr3);
    return Arr3;
}
console.log("***************Concat function**********");
concat(Arr1,Arr2);