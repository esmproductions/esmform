$(document).ready(function(){
  $('#main-form').parsley()
  $('.add-cid').click(function(){
    $('#main-form').parsley().destroy()
    var this_cid = document.getElementsByClassName('cid').length + 1
    var $div = $('<div></div>').addClass('form-group cid')
    var $inputGroup = $('<div></div>').addClass('input-group')
    var $label = $('<label></label>').text(`Course ID #${this_cid}`).addClass('cid-num')
    var $input = $('<input></input>').attr({
      'id': `${ordinal(this_cid)} ID`,
      'name': `${ordinal(this_cid)} ID`,
      'class': 'form-control',
      'type': 'text',
      'data-parsley-cid': '',
      'required': '',
      'data-parsley-trigger': 'change',
      'data-parsley-errors-container': `.error${this_cid}`
    })
    var $span = $('<span></span>').attr({
      'type': 'button',
      'class': 'btn btn-danger input-group-addon remove-cid'
    }).text('remove')

    var $field = $('<div></div>').addClass(`error${this_cid}`)

    $inputGroup.append([$input,$span])
    $div.append([$label,$inputGroup,$field])
    $('.cids').append($div)
    $('#main-form').parsley()
  })

  $('#parent-id').on('input', function() {
    var cid = $(this).val()
    $('#_subject').val(`Subject: Blackboard Course Merge - ${cid} (Parent)`)
  })
})

$(document).on('click','.remove-cid', function(){
  $(this).parent('div').parent('div').remove()
  var count = 1
  $('.cid').each(function(e){
    $(this).children('label').text(`Course ID #${count}`)
    count = count + 1
  })
})

function ordinal(num) {
  if (parseInt(num) == 1) return `${num}st`
  else if (parseInt(num) == 2) return `${num}nd`
  else if (parseInt(num) == 3) return `${num}rd`
  else return `${num}th`
}
