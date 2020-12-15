
function getWeather(searchQuery){
var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&appid="+apikey;

$(".city").text("");
$(".temp").text("");
$(".error-message").text("");
$(".feelsLike").text("");
$(".weather").text("");

$.ajax(url,{success: function(data){
  console.log(data);
  $(".city").text(data.name);
  $(".temp").text("Temp:"+data.main.temp);
  $(".feelsLike").text("Feels Like:"+data.main.feels_like);
  $(".weather").text("Weather:"+data.weather[0].main);
},error:function(error){
  $(".error-message").text("An error occurred");
}})

}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

