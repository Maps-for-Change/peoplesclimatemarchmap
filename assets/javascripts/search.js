PCM.Search = (function() {
  function performSearch(event) {
    var zipCode = $('#climate_map_zip_code').val();

    $.ajax('/zip_codes/' + zipCode, {
      success: function(data) {
        PCM.Map.setView(data['latitude'], data['longitude']);
        $('#climate_map_search_error').hide();
      },
      error: function() {
        $('#climate_map_search_error').show();
      }
    });
    event.preventDefault();
  }

  return {
    performSearch: performSearch
  }
})();