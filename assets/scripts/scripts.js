$(document).ready(function(){
  $('#main-form').parsley()
  $('.add-cid').click(function(){
    $('#main-form').parsley().destroy()
    var num_cids = document.getElementsByClassName('cid').length
    console.log(num_cids)
    var $div = $('<div></div>').addClass('form-group cid')
    var $inputGroup = $('<div></div>').addClass('input-group')
    var $label = $('<label></label>').text(`Course ID #${num_cids+1}`).addClass('cid-num')
    var $input = $('<input></input>').attr({
      'id': num_cids,
      'name': num_cids,
      'class': 'form-control',
      'type': 'text',
      'data-parsley-cid': '',
      'required': '',
      'data-parsley-trigger': 'change'
    })
    var $span = $('<span></span>').attr({
      'type': 'button',
      'class': 'btn btn-danger input-group-addon remove-cid'
    }).text('remove')

    var $field = $('<div></div>').addClass('error-log')

    $inputGroup.append([$input,$span])
    $div.append([$label,$inputGroup,$field])
    $('.cids').append($div)
    $('#main-form').parsley()
  })
})

$(document).on('click','.remove-cid', function(){
  $(this).parent('div').parent('div').remove()
  var num_cids = $('.cid').length
  var count = 1
  $('.cid').each(function(e){
    $(this).children('label').text(`Course ID #${count}`)
    count = count + 1
  })
  console.log(num_cids)

})
