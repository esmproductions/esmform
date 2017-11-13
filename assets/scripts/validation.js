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
  var parsleyConfig = {
    errorsContainer: function(parsleyField) {
      return parsleyField.$element.parent().siblings('div.error-log')
    }
  }

  $('form').parsley(parsleyConfig)
})
