let COVID_URL = "https://e51vfb2s30.execute-api.us-east-1.amazonaws.com/Dev/getcovidhospitals";

//Fetching the World Data
fetch(COVID_URL, {
    "method": "GET",
})
.then(response=>response.json())
.then(data=>{
    console.log(data);
    HospitalId.innerHTML = data.Items[0].HospitalId;
    location.innerHTML = data.Items[0].Location;
    Hospital_Name.innerHTML = data.Items[0].Hospital_Name;
    Testing_Center.innerHTML = data.Items[0].Testing_Center;
    Rating.innerHTML = data.Items[0].Rating;
});