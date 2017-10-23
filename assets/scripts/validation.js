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
  var parsleyConfig = {
    errorsContainer: function(parsleyField) {
      // var fieldSet = parsleyField.$element.closest('fieldset')
      // return fieldSet.find(`div[id="errors-${parsleyField.$element.attr('id')}"]`)
      return parsleyField.$element.parent().siblings('.error-log')[0]
    }
  }

  $('#main-form').parsley(parsleyConfig)
})
