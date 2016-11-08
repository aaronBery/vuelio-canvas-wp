$('#canvas-insert').on('click', function () {
  var canvasUrl = $('#canvas-url').val();
  selectionText = '';
  if (typeof(tinyMCE.editors.content) != "undefined") {
    selectionText = (tinyMCE.activeEditor.selection.getContent()) ? tinyMCE.activeEditor.selection.getContent() : '';
  }
  window.send_to_editor('<div class="responsive-iframe-container"><iframe src="' + canvasUrl + '"></iframe></div>');
  $('#canvas-thickbox').dialog( "close" );
});
