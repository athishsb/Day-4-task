//question 2.a(odd numbers)
var numbers=[1,2,3,4,5,6,7,8,9];
var oddNumbers=(arr)=>{
   for(var i in arr)
   {
      if(arr[i]%2!==0){
         console.log(arr[i]);
      }
   }
};
oddNumbers(numbers);

//question 2.b(capitalize string array)
var stringArray=["apple","orange","banana","cherry","mango"];
var titlecase=(arr)=>{
   for(var i in arr)
   {
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
   }
};
titlecase(stringArray);
console.log(stringArray);

//question 2.c(array sum)
var numbers=[1,2,3,4,5,6,7,8,9];
var sumNumbers=(arr)=>{
   var sum=0;
   for(var i in arr){
      sum=sum+arr[i];
   }
   return sum;
}
var result=sumNumbers(numbers);
console.log(result);

//question 2.d(prime in array)
var a=[5,9,63,29,35,6,55,23];
var primeNumbers=(arr)=>{
    var primes=[];
    var isPrime=(item)=>{
        var identifier=item/2;
        for(var j=2;j<=identifier;j++)
        {
            if((item%j)==0)
            {
                return false;
            }
        }
        return true;
    };
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

//question 2.e(palindrome in array)
var a=[121,"level","hello","civic","world"];
var palindromes=[];
var findpalindrome=(arr)=>{
    var isPalindrome=(str)=>str===str.split('').reverse().join('');
    for(var i=0;i<arr.length;i++)
    {
        if(isPalindrome(String(arr[i])))
        {
            palindromes.push(arr[i]);
        }
    }
};
findpalindrome(a);
console.log(palindromes);