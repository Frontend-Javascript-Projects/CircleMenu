$(function () {
    $('#loginForm').modal('show');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#loginMemberForm').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: "get",
            url: "/loginCheck",
            data: $('#loginMemberForm').serialize(),
            dataType: "json",
            success: function (response) {
                if (response.success){
                    $('.overlay').hide();
                    $('#loginForm').modal('hide');
                }
                else{
                    $('.warning').show();
                }
                
            }
        });
        return false;
    });

})
