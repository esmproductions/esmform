$(document).ready(function(){
  $('#main-form').parsley()
  $('.add-cdn').click(function(){
    $('#main-form').parsley().destroy()
    var num_cdns = document.getElementsByClassName('cdn').length
    console.log(num_cdns)
    var $div = $('<div></div>').addClass('form-group cdn')
    var $inputGroup = $('<div></div>').addClass('input-group')
    var $label = $('<label></label>').text(`CDN #${num_cdns+1}`).addClass('cdn-num')
    var $input = $('<input></input>').attr({
      'class': 'form-control',
      'type': 'text',
      'data-parsley-cdn': '',
      'required': '',
      'data-parsley-trigger': 'change'
    })
    var $span = $('<span></span>').attr({
      'type': 'button',
      'class': 'btn btn-danger input-group-addon remove-cdn'
    }).text('remove')

    $inputGroup.append([$input,$span])
    $div.append([$label,$inputGroup])
    $('.cdns').append($div)
    $('#main-form').parsley()
  })
})

$(document).on('click','.remove-cdn', function(){
  $(this).parent('div').parent('div').remove()
  var num_cdns = $('.cdn').length
  var count = 1
  $('.cdn').each(function(e){
    $(this).children('label').text(`CDN #${count}`)
    count = count + 1
  })
  console.log(num_cdns)

})
