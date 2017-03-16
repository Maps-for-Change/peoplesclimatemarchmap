var PCM = {
  loadScript: function(scriptPath) {
    var head = document.getElementsByTagName('head')[0];

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptPath;
    head.appendChild(script);
  },

  loadStylesheet: function(stylesheetPath) {
    var head = document.getElementsByTagName('head')[0];

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheetPath;
    head.appendChild(link);
  }
};

PCM.loadScript('assets/application.js');
PCM.loadStylesheet('assets/application.css');

document.write('<div id="climate_map_embed" style="width: 100%; min-height: 400px;"></div>');

document.write('<input type="checkbox" name="climate_map_march_filter" id="climate_map_march_filter" checked="checked" />');
document.write('<label for="climate_map_march_filter">Sister Marches</label>');

document.write('<input type="checkbox" name="climate_map_bus_filter" id="climate_map_bus_filter" checked="checked" />');
document.write('<label for="climate_map_bus_filter">Buses</label>');

document.write('<input type="checkbox" name="climate_map_group_filter" id="climate_map_group_filter" checked="checked" />');
document.write('<label for="climate_map_group_filter">Local Groups</label>');

document.write('<form id="climate_map_search">');
document.write('<input type="text" name="climate_map_zip_code" id="climate_map_zip_code" placeholder="US zip code" />');
document.write('<input type="submit" value="Search">');
document.write('</form>');
document.write('<p id="climate_map_search_error">Please enter a valid US zip code.</p>');

window.addEventListener("load", function() {
  PCM.Map.createMap('climate_map_embed');
});
