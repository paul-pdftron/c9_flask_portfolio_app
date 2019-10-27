$(document).on('viewerLoaded', function() {
  docViewer.setMargin(20);
  docViewer.on('fitModeUpdated', function(e, fitMode) {
    console.log('fit mode changed');
  });
});
