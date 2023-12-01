$(document).ready(function () {
    $("#addRow").click(function () {
        var markup = "<tr><td contenteditable='true'> - </td><td contenteditable='true'> - </td><td contenteditable='true' > -</td><td contenteditable='true'> - </td><td><button class='btn btn-danger deleteRow'>Eliminar</button></td></tr>";
        $("table tbody").append(markup);
    });
});

  $(document).ready(function () {
    $("table").on("click", ".deleteRow", function () {
      $(this).closest("tr").remove();
    });
  });