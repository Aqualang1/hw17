console.log('js');
$('#openModal').on('click', function () {
    $('.main').append('<div class ="modal"><button id="closeModal">Push to close</button></div>'),
        $('.modal').css({
            'position': 'absolute', 'width': '30rem', 'height': '30rem', 'background': 'red', 'display': 'flex', 'justify-content': 'center', 'align-items': 'center'
        })
    $('#closeModal').on('click', () => $('.modal').remove())
})

// $('.main').change(function(){
//     if ($(this).find('.modal').length === 1) {
//         $(this).css('background-color', 'black')
//     } else {
//         $(this).css('background-color', 'darkgrey')
//     }
// })

// $('.main').css('background-color', 'black')