$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'xml/car_list.xml',
        dataType: 'xml',
        success: function(xml) {
            $(xml).find('car').each(function() {
                $('#car').append(
                        /*'<div class="col-sm-4">' +
                            '<div class="card" style="width: 20rem;">' +
                              '<img class="card-img-top" src="'+ $(this).find('image').text() +'" width="300px" alt="Card image cap">' +
                              '<div class="card-block">' +
                                '<h4 class="card-title">' + $(this).find('name').text() + '</h4>' +
                              '</div>' +
                              '<ul class="list-group list-group-flush">' +
                                '<li class="list-group-item"><b>Description: </b>' + $(this).find('description').text() + '</li>' +
                                '<li class="list-group-item"><p style="color:red; font-size:30px;">' + $(this).find('price').text() + '</p></li>' +
                              '</ul>' +
                              '<div class="card-block">' +
                                '</div><button type="button" class="btn btn-primary" style="width:100px">Buy</button></td>' +
                              '</div>' +
                            '</div>' +
                    '</div>'*/
                    '<table class="table">' +
                    '<tbody>'+
                    '<tr>'+
                        '<td><img src="' + $(this).find('image').text() + '" width="300px" border="5"></td>'+
                        '<td><div style="font-size:20px;"><b>' + $(this).find('name').text() + '</b></div> ' +
                        '<hr class="my-2">' +
                        '<div style="font-size:20px;"><b>Brand: </b>' + $(this).find('brand').text() + '</div> ' +
                        '<div><b>Description: </b>' + $(this).find('description').text() + '</div> ' +
                        '<div><b>Colour: </b>' + $(this).find('color').text() + '</div> ' +
                        '<div style="color:red; font-size:30px;">' + $(this).find('price').text() + '</div>' +
                        '<div><b>Contact: </b>' + $(this).find('contact').text() + ' | <b>Name: </b>' + $(this).find('Oname').text() + '</div> ' +
                        '<div>' + '<button type="button" class="btn btn-outline-primary" style="width:150px; margin-top:10px">Buy</button></div></td>' +
                    '<tr>'+
                    '</tbody>'+
                    '</table><div>');
            });
        }
    });
});