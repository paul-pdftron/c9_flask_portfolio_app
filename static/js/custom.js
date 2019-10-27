$(document).on('documentLoaded', function() {
  var doc = docViewer.getDocument();
  doc.loadThumbnailAsync(0, function(thumb) {
    $('#myThumbnailDiv').append(thumb);
  });

  var annotManager = docViewer.getAnnotationManager();
  var rectangle = new Annotations.RectangleAnnotation();
  rectangle.PageNumber = 2;
  rectangle.X = 100;
  rectangle.Y = 100;
  rectangle.Width = 250;
  rectangle.Height = 250;
  rectangle.Author = annotManager.getCurrentUser();
  annotManager.addAnnotation(rectangle);

  docViewer.displayLastPage();
});
