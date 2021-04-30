function openNav(){
    document.getElementById("mySidenav").style.width="250px"
}
function closeNav(){
    document.getElementById("mySidenav").style.width="0"
}
$('#image_selecter').click(function (e) { 
    e.preventDefault();
    $.ajax({
        url: "/images",
        dataType:'html',
        success: function (response) {
            $('body').append('<div id="imageSelector" class="modal fade">'+response+'</div>');
            $('#imageSelector').modal('show');
        }
    });
    
});
$('[data-tooltip="tooltip"]').tooltip();   

function imageSelectorFunction(address){
    $('#image_selecter').val(address);
    $('#imageSelector').modal('hide');
    
}
$('#tableName_form').on('submit',function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        data: $('#tableName_form').serialize(),
        dataType: 'json',
        url: '/tableName',
        success: function (response) {
            $('.tableName').html(response.tableName);
        },
    })
    $('#setTableName').modal('hide');
})
