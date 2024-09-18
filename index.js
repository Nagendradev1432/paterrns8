let str1=prompt("enter a name :")
index=0
rows=4
for(i=1;i<=rows;i++){
    res=""
   
    for(j=1;j<=i;j++){  
        if(str1[index]==undefined){
            res=res+"* "
//         }
        else{
            res=res+str1[index]+" "
              index++;
        }
   
    }
    console.log(res)

h 
e l 
l o * 
* * * * 


let rows=+prompt("enter of rows :")
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows-i+1;j++){
        if(i==j||i+j==rows)
        res=res+" "
    }
    console.log(res)
}


let rows=+prompt("enter number of rows :")
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(i==j||j==rows-i+1){
        res=res+j+" "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}

1       5 
  2   4   
    3     
  2   4   
1       5 



let rows=+prompt("enter number of rows :")
for(i=1;i<=rows;i++){
    res=""
    // for(k=1;k<=i;k++){
    //     res=res+" "
    // }
    for(j=1;j<=rows;j++){
        if(i==j||i+j==rows+1){
        res=res+j+" "
    }
    else{
        res=res+"  "
    }
}
    console.log(res)
}


1       5 
  2   4   
    3     
  2   4   
1       5 



let num=71

if(num>1){
    c=0
    for(i=2;i<num;i++){
        if(num%i==0){
            // console.log("nonprime number",i)
            c++
            break;
        }
       
  
    if(c==0){
        console.log("prime")
    }
}
    
}


function multi(a){
    let multi=1
     for(i of a){
      if(i%2==0){
          multi=multi*i
      }   
     }
     console.log(multi)
     
 }
 const arr1=[1,2,3,4,5,6]
 multi(arr1)


 let arr1=[1,2,3,4,5,6]
multi=1
for(i of arr1){
    if(i%2==0){
       multi=multi*i 
    }
}
console.log(multi)

ca=900
b=700
c=600
result=(a==b && b==c)?"all are equal":(a>b && a>c)?"a is bigger":(b>c)?"b is bigger":"c is bigger";
console.log(result)


function multiple(a){
    let multi=1
    for(i of a){
        if(i%2==1){
            multi*=i
        }
    }
    return multi;
 
  
}
const arr1=[1,2,3,4,5,6]
let result=multiple(arr1)
   console.log(result)


   let arr1=[[1,8,5],[6,9,8,7],[5,9,1,9]]
let result=arr1.map(c=>c.sort((a,b)=>a-b))
console.log(result)


let str1="Nagendrakumar"
rows=1,ind=0
while(str1[ind]!=undefined){
    res=""
    for(i=1;i<=rows;i++){
        if(str1[ind]==undefined){
        res=res+"* "
     
    }
    else{
        res=res+str1[ind]+" "
        ind++
        
    }
}
    rows++
    console.log(res)
}


N 
a g 
e n d 
r a k u 
m a r * * 


let str1="Nagendrakumar"
rows=1,ind=0
while(ind<str1.length){
    res=""
    for(i=1;i<=rows;i++){
        if(str1[ind]==undefined){
        res=res+"* "
     
    }
    else{
        res=res+str1[ind]+" "
        ind++
        
    }
}
    rows++
    console.log(res)
}

N 
a g 
e n d 
r a k u 
m a r * * 


let str1="Nagendr"
ind=0
for(i=1;i<=str1.length;i++){
    res=""
    for(j=1;j<=str1.length;j++){
        if(i==j||i+j==str1.length){
            res=res+str1[ind]+" "
            ind++
        }
        else{
            res=res+"  "
        }
    }
    console.log(res);
    
}


let str1="Nagendr"
for(i=0;i<str1.length;i++){
    res=""
    for(j=0;j<str1.length;j++){
        if(i==j||j==str1.length-i-1){
        res=res+str1[j]+" "
    }
    else{
        res=res+"  "
    }
}
console.log(res)

}

N           r 
  a       d   
    g   n     
      e       
    g   n     
  a       d   
N           r 



let str1="Nagendr"
index=0
for(i=0;i<str1.length;i++){
    res=""
    for(j=0;j<str1.length;j++){
        if(i==j||j==str1.length-i-1){
            res=res+str1[index]+" " 
            console.log("beforeindex",index)
          index++
          console.log("incr-index",index)
        }
     

        else ifpoi 
        else{
            res=res+"  "
        }
    }
    
    console.log(res);
    
}



let rows=prompt("enter a number of rows :")
num=1
mun=0
for(i=1;i<=rows;i++){
    res=""
    for(j=1;j<=rows;j++){
        if(j==1){
            res=res+i+" "
        }
        else if(i==1){
            res=res+j+" "
        }
        else if(j==rows-i+1){
            res=res+rows+" "
        }
        else{
            res=res+"  "
        }
    }
    console.log(res)
}

1 2 3 4 5 
2     5   
3   5     
4 5       
5  