async function getData(){
    try{
        let result= await fetch('https://fakestoreapi.com/products');
        let data = await result.json();
        return await data;
    }catch(error){
        console.log("Failed to fetch products. Please try again later")
    }
    
}


    showData= async function(data){
        let x = await data;       
        x.forEach((ele)=> console.log(ele))        
    }
    
    totalPrice = async function(data){
        let x= await data;
        let ans=  x.reduce((acc,curr)=>{
            acc=acc+curr.price;
            return acc;
        },0)
        console.log(ans)
    }

totalPrice(getData())

showData(getData())
