var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((value)=>{
 console.log(value);

    for(var i=0; i<3; i++){
       var div=document.createElement("div")
        div.style.color="black"
        div.style.fontSize="32px";
        div.style.margin="50px"
        div.innerHTML=`
        <div class="container" style="border:1px solid black; padding:10px 10px; background-color:grey">
        <div class="row">
        <div class="col-lg-4" >

        <div class="card border-success mb-3" style="max-width: 600px; background-color:white: height:500px">
        <div class="card-header" style="text-align:center">${value[i].name}</div>
        <div class="card-body text-success" style="text-align:center">
        <h5 class="card-title" style="padding-bottom:45px "><img src="${value[i].flags.svg}" style="width:300px"></h5>
        <h5 class="card-title" style="color:black">CAPITAL: ${value[i].capital}</h5>
        <h5 class="card-title" style="color:black">REGION: ${value[i].region}</h5>
        <h5 class="card-title" style="color:black">COUNTRY CODE: ${value[i].alpha3Code}</h5>
        <a class="btn btn-primary" href="https://openweathermap.org/find?q=${value[i].name}" role="button"style="marigin-bottom:50px">Click for weather</a>

        </div>
        </div>
        </div>
        <div class="col-lg-4">

        <div class="card border-success mb-3" style="max-width: 600px; background-color:white">
        <div class="card-header" style="text-align:center">${value[i=i+1].name}</div>
        <div class="card-body text-success" style="text-align:center">
        <h5 class="card-title" style="text-align:center"><img src="${value[i].flags.svg}" style="width:300px"></h5>
        <h5 class="card-title" style="color:black">CAPITAL: ${value[i].capital}</h5>
        <h5 class="card-title" style="color:black">REGION: ${value[i].region}</h5>
        <h5 class="card-title" style="color:black">COUNTRY CODE: ${value[i].alpha3Code}</h5>
        <a class="btn btn-primary" href="https://openweathermap.org/find?q=${value[i].name}" role="button">Click for weather</a>

        </div>
        </div>
        </div>
        <div class="col-lg-4" style="height:200px">

        <div class="card border-success mb-3" style="max-width: 600px; background-color:white">
        <div class="card-header" style="text-align:center">${value[i=i+1].name}</div>
        <div class="card-body text-success" style="text-align:center">
        <h5 class="card-title"><img src="${value[i].flags.svg}" style="width:275px"></h5>
        <h5 class="card-title" style="color:black">CAPITAL: ${value[i].capital}</h5>
        <h5 class="card-title" style="color:black">REGION: ${value[i].region}</h5>
        <h5 class="card-title" style="color:black">COUNTRY CODE: ${value[i].alpha3Code}</h5>
        <a class="btn btn-primary" href="https://openweathermap.org/find?q=${value[i].name}" role="button">Click for weather</a>

        </div>
        </div>
        </div>
        </div>
        </div>
      `
        document.body.append(div);
    }
});


//var res=fetch("https://data.covid19india.org/v4/min/data.min.json")
//res.then((data)=>data.json())
//.then((value)=>{
   // console.log(value);
   // bar(value);
//});

//function bar(value){
//for(var i in value){
    //console.log(i,value[i])
      
      // div.style.color="green"
      // div.style.fontSize="32px";
      //if(i==="TN"){
      //var div=document.createElement("div")
      // div.innerHTML=`
      //<div class="card border-success mb-3" style="max-width: 18rem;">
      //  <div class="card-header">${i}</div>
       // <div class="card-body text-success">
      //  <h5 class="card-title">${value[i].total.confirmed}</h5>
      //  <h5 class="card-title">${value[i].total.deceased}</h5>
      //  </div>
    //  </div>
    //  `
  //    document.body.append(div);
  //  }}
  
//}

    