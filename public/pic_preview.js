// for more information, see http://www.html5rocks.com/en/tutorials/file/dndfiles/

function handleFiles(files) {
  var preview_area = document.getElementById("preview");

  // work through the entire list of files provided by the form
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Only create preview thumbnails for images , skip others.
    var imageType = /image.*/;
    if (!file.type.match(imageType)) {
      continue;
    }

    // First, create the img element and append it to the preview area
    var img = document.createElement("img");
    img.classList.add("preview_thumbnail");
    img.file = file;
    img.title = file.name + " " + file.type +" " + (file.size/1024).toFixed(0) + " kb";
    preview_area.appendChild(img);

    // Next, tell the browser to read the file given in the img tag and render it
    var reader = new FileReader();
    reader.onload = (function(aImg) {return function(e){aImg.src = e.target.result; };})(img);
    reader.readAsDataURL(file);
  }
}