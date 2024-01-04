//question 1.a(odd numbers)
var numbers=[1,2,3,4,5,6,7,8,9];
var oddNumbers=function(arr){
   for(var i in arr)
   {
      if(arr[i]%2!==0){
         console.log(arr[i]);
      }
   }
};
oddNumbers(numbers);

//question 1.b(capitalize string array)
var stringArray=["apple","orange","banana","cherry","mango"];
var titlecase=function(arr){
   for(var i in arr)
   {
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
   }
};
titlecase(stringArray);
console.log(stringArray);

//question 1.c(array sum)
var numbers=[1,2,3,4,5,6,7,8,9];
var sumNumbers=function(arr){
   var sum=0;
   for(var i in arr){
      sum=sum+arr[i];
   }
   return sum;
}
var result=sumNumbers(numbers);
console.log(result);

//question 1.d(prime in array)
var a=[5,9,63,29,35,6,55,23];
var primeNumbers=function(arr){
    var primes=[];
    function isPrime(item)
    {
        var identifier=item/2;
        for(var j=2;j<=identifier;j++)
        {
            if((item%j)==0)
            {
                return false;
            }
        }
        return true;
    }
    for(var index=0;index<arr.length;index++)
    {
        if(isPrime(arr[index]))
        {
            primes.push(arr[index]);
        }
    }
    return primes;
};
var result=primeNumbers(a);
console.log(result);

//question 1.e(palindrome in array)
var a=[121,"level","hello","civic","world"];
var palindromes=[];
var findpalindrome=function(arr){
    for(var i=0;i<arr.length;i++)
    {
        if(isPalindrome(String(arr[i])))
        {
            palindromes.push(arr[i]);
        }
    }
    function isPalindrome(str)
    {
        return str===str.split('').reverse().join('');
    }
};
findpalindrome(a);
console.log(palindromes);

//question 1.f(median of sorted array)
var array1=[1,12,15,26,38];
var array2=[2,13,17,30,45];
var findmedian=function(arr1,arr2){
    var combinedArray=arr1.concat(arr2);
    combinedArray.sort((a,b)=>a-b);
    var length=combinedArray.length;
    var middle=Math.floor(length/2);
    return (combinedArray[middle-1]+combinedArray[middle])/2;
};
var median=findmedian(array1,array2);
console.log(median);

//question 1.g(remove array duplicates)
var arrDuplicates=[1,1,1,1,2,2,2,2,3,3,4,4,5,6,6,7];
var arrUnique=[];
var removeDup=function(arr){
    for(var i=0;i<arr.length;i++)
    {
        if(arrUnique.indexOf(arr[i])===-1)
        {
            arrUnique.push(arr[i]);
        }
    }
};
removeDup(arrDuplicates);
console.log(arrUnique);

//question 1.h(rotate array k times)
var orignialArray=[1,2,3,4,5];
var rotatedArray=[];
var rotate=function(arr,k){
    var n=arr.length;
    k=k%n;
    for(var i=0;i<k;i++)
    {
        var temp=arr.pop();
        arr.unshift(temp);
    }
    rotatedArray=arr;
};
rotate(orignialArray,2);
console.log(rotatedArray);