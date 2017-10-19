$(document).ready(function(){
  window.Parsley.addValidator('cdn', {
    validateString: function(value){
      var firstPeriod = value.indexOf('.')
      var lastPeriod = value.lastIndexOf('.')
      return lastPeriod !== firstPeriod
    },
    messages: {
      en: 'Not a valid CDN'
    }
  })
})
