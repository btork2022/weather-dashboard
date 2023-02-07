var temp = $("#today")
//this function calls the weather API
function apiCaller(){
    //ajax is the jquery method
    $.ajax({
        //weather url
        url: "http://api.openweathermap.org/data/2.5/forecast?q=Boreham&appid=c48b3516d1db7e04c97e25b93e94eecc",
        method: "GET"

        //.then to specify function response
    }).then(function(Response){
        console.log(Response)
        console.log(Response.list[0].main.temp-273.15)
        console.log(Response.list[0].main.humidity)
        console.log(Response.list[0].wind.speed)
        temp.text(Response.list[0].main.temp-273.15)
    }) // lines 2-15 for building function
}
//calling the function apiCaller
apiCaller()
