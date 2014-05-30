// for more information, see http://www.html5rocks.com/en/tutorials/file/dndfiles/

function handleFiles(files) {
  var preview_area = document.getElementById("preview");

  // work through the entire list of files provided by the form
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Only create preview thumbnails for images
    // skip anything that isn't an image type of file
    var imageType = /image.*/;
    if (!file.type.match(imageType)) {
      continue;
    }

    // First, create the img element
    var img = document.createElement("img");
    img.classList.add("preview_thumbnail"); // apply styles via a class
    img.file = file;  // assign attributes
    // put file details in a pop-up tooltip
    img.title = file.name + " " + file.type +" " + (file.size/1024).toFixed(0) + " kb";
    
    // append the image element to the preview area
    preview_area.appendChild(img);

    // Next, tell the browser to read the file given in the img tag and render it
    
    // make a variable where we can interact with the API
    var reader = new FileReader();
    
    // Set up the render callback
    // This is a "closure" - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
    // it's run when the file finishes loading; it renders the image
    reader.onload = (function(aImg) {return function(e){aImg.src = e.target.result; };})(img);
   
    // finally, go get the file (and run the callback when it's loaded)
    reader.readAsDataURL(file);
  }
}