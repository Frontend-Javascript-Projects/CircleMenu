$('.editImage').click( function(){
    var id = $(this).attr('id');
    var res = id.slice(6);
    $.ajax({
        type: "GET",
        url: "/editImage",
        data: {"id" : res},
        dataType: "json",
        success: function (response) {
            $('#idOffMember').val(response.id);
            $('#editname').val(response.name);
            $('#editsurname').val(response.surname);
            $('#editfather_name').val(response.father_name);
            $('.memberPhoto').attr('src',response.image);
            $('#edit_relative_name').val(response.relative_name);
            $('#edit_generation_position').val(response.generation_position);
            $('#edit_birth_date').val(response.birth_year);
            $('#edit_died_date').val(response.died_year);

        }
    });
    
});
// ddeleting member in tree when click on x
$('.deleteMember').on('click' ,function(){
    var id = $(this).attr('id');
    var res = id.slice(6);
    $.confirm({
        title: 'Yoklajakmy?',
        content: 'Sen ozune Uwerinmi?',
        buttons: {
            Hawa: function () {
                $('#image_'+res).siblings().remove();
                $('#image_'+res).remove();
                $.ajax({
                    type: "get",
                    url: "/deleteMember",
                    data: {"id" : res},
                    dataType: "json",
                    success: function (response) {
                        // location.reload();
                    }
                });
            },
            Yok: function () {
                $.alert('Molodis!');
            }
        }
    });
});
//

$('.galery').on('click', function(){
    var id = $(this).attr('id');
    var res = id.slice(6);
    var galery ='';
    $.ajax({
        type: "GET",
        url: "/getGalery",
        data: {"id" : res},
        dataType: "json",
        success: function (response) {
            for(var i=0; i < response.galery.length; i++){
                galery += "<img src='"+response.galery[i].photos+"' width ='200' >";
            }
            $('.imageGaleryOfMember').html(galery);

        },
    });
})
