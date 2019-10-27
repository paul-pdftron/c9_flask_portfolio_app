WebViewer(...)
  .then(function(instance) {
    input.addEventListener('change', function() {
      // Get the file from the input
      var file = input.files[0];
      instance.loadDocument(file, { filename: file.name });
    });
