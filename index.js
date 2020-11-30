var API_URL = "https://1399n7dte4.execute-api.us-east-1.amazonaws.com/dev/getcovidhospitals"
$('#submitButton').on('click',function(){
    console.log($("#zipcode").val());
$.ajax({
    type: 'GET',
    url:API_URL,
    data: {ZipCode: $("#zipcode").val()},
    contentType:"application/json",
    Origin: "*",

    

    success: function(data){        
        
        $('#myTable > tbody:last-child').html('');

        data.Items.forEach(element => {
            $('#myTable > tbody:last-child').append('<tr>');
            $('#myTable > tbody:last-child').append('<td>' +element.HospitalName+ '</td>');
            $('#myTable > tbody:last-child').append('<td>' +element.Location+ '</td>');
            $('#myTable > tbody:last-child').append('<td>' +element.County+ '</td>');
            $('#myTable > tbody:last-child').append('<td>' +element.State+ '</td>');
            $('#myTable > tbody:last-child').append('<td>' +element.OpenHours+ '</td>');
            $('#myTable > tbody:last-child').append('<td>' +element.PhoneNumber+ '</td>');
            $('#myTable > tbody:last-child').append('<td>' +element.Website+ '</td>');
            /*for (const [key, value] of Object.entries(element)) {
                if(key==='HospitalName' || key==='Location' || key==='OpenHours' || key==='PhoneNumber' || key==='Website')
                    $('#myTable > tbody:last-child').append('<td>' +value+ '</td>');
            }*/
            $('#myTable > tbody:last-child').append('</tr>');
        }) ;   
    }
});
return false;
});
