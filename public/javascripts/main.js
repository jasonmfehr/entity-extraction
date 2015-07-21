(function($){
  $("#sendAjax").click(function() {
      $.ajax(
        {
          'url' : '/api/processInput',
          'data' : {'userInput' : $('#userInput').val()},
          'dataType' : 'json',
          'method' : 'POST',
          'success' : function(data) {
            console.log("ajax response: " + data.status);
          }
        }
      );
  });

  $(document).ajaxStart(function() {
    console.log("Triggered ajaxStart handler.");
  });

  $(document).ajaxSuccess(function() {
    console.log("ajax call succeeded");
  });

  $(document).ajaxError(function(err) {
    console.log("ajax error: " + err);
  });
})(jQuery)
