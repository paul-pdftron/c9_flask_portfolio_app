$(document).on('viewerLoaded', function() {

  window.parent.document.getElementById('file-upload').onchange = function(e) {
    var file = e.target.files[0];
    if (file) {
      readerControl.loadDocument(file);
    }
  };

  docViewer.on('documentLoaded', function() {
   // call methods relating to the loaded document
    // console.log('doc loaded');
  });
});
