$(document).ready(function(){
  window.Parsley.addValidator('cid', {
    validateString: function(value){
      var firstPeriod = value.indexOf('.')
      var lastPeriod = value.lastIndexOf('.')
      return lastPeriod !== firstPeriod
    },
    messages: {
      en: 'Not a valid course ID'
    }
  })
  console.log($(`input[id="parent"]`).parent().siblings('.error-log')[0])
  console.log($('form').parsley())
  var parsleyConfig = {
    errorsContainer: function(parsleyField) {
      // var fieldSet = parsleyField.$element.closest('fieldset')
      // return fieldSet.find(`div[id="errors-${parsleyField.$element.attr('id')}"]`)
      console.log(parsleyField.$element.parent().siblings('div.error-log'))
      console.log($('.error-log')[0])
      return parsleyField.$element.parent().siblings('div.error-log')
    }
  }

  $('form').parsley(parsleyConfig)
})
