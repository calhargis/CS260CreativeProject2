var API_ID = "A2oVvqb8xFxh7AcmrzTU";

document.getElementById("coordSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const valueLat = document.getElementById("latInput").value;
  const valueLong = document.getElementById("longInput").value;
  if (valueLat === "" && valueLong === "")
    return;
  console.log(valueLat);
  console.log(valueLong);

  const url = "https://api.onwater.io/api/v1/results/" + valueLat + "," + valueLong + "?access_token=" + API_ID;
fetch(url)
.then(function(response){
  console.log(response);
  return response.json();
})
.then(function(json){
  console.log(json);
  var thehtml;
  if (json.water) {
    thehtml = "<p>water</p>";
  }
  if (!json.water) {
    thehtml = "<p>land</p>";
  }
  document.getElementById('waterResults').innerHTML = thehtml;
  json.water
})
});
