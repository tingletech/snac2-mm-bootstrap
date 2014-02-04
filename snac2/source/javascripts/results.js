$(function () { 

    $("label.advancedSearch").hide();
  $("form.cpfSearch").hoverIntent(function () {
    $("label.advancedSearch").css("display", "inline");
  }, function () {
    if ($("label.advancedSearch select").val() === 'cpfdescription') {
      $("label.advancedSearch").fadeOut();
    }
  });

  var storyTitleFormatter = function (row, cell, value, columnDef, dataContext) {
    s ="<a href='" + dataContext["path"].replace('default:', '/xtf/view?docId=') + "'>" +
              dataContext["identity"] + "</a>";
    return s;
  };

  var browseFormatter = function (row, cell, value, columnDef, dataContext) {
    s = '';
    if (dataContext['selected']) {
      s = "<b>" + dataContext['value'] + "</b>"; 
    } else {
      s = "<a href='" + dataContext['selectLink'] + "'>" + 
              dataContext['value'] + "</a>";
    }
    return s;
  };

  var index1 = function (row, cell, value, columnDef, dataContext) {
    s = dataContext['index'] + 1;
    return s;
  };

  /* var dateFormatter = function (row, cell, value, columnDef, dataContext) {
    return (value.getMonth()+1) + "/" + value.getDate() + "/" + value.getFullYear();
  }; */

  var columns = [
    // {id: "num", name: "#", formatter: index1, width: 50},
    {id: "identity", name: "identity", width: 300, formatter: storyTitleFormatter},
    {id: "facet-entityType", name: "type", field: "facet-entityType", width: 100},
    {id: "fromDate", name: "from", field:"fromDate" , width: 100},
    {id: "toDate", name: "to", field:"toDate", width: 100},
    {id: "facet-recordLevel", name: "level", field: "facet-recordLevel", width: 100}
  ];

  var options = {
    // rowHeight: 64,
    editable: false,
    enableAddRow: false,
    enableColumnReorder: false,
    forceFitColumns: true,
    enableCellNavigation: true
  };

  var loadingIndicator = null;

  console.log(window.data);

    grid = new Slick.Grid("#myGrid", window.data, columns, options);


});
