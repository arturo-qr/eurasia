function imgHighlight(event, grpName) { 
var i,img,imgGalleryArr,args=imgHighlight.arguments;
  if (event == "init" && args.length > 2) {
    if ((img = MM_findObj(args[2])) != null && !img.img_init) {
      img.img_init = true; img.img_up = args[3]; img.img_dn = img.src;
      if ((imgGalleryArr = document[grpName]) == null) imgGalleryArr = document[grpName] = new Array();
      imgGalleryArr[imgGalleryArr.length] = img;
      for (i=4; i < args.length-1; i+=2) if ((img = MM_findObj(args[i])) != null) {
        if (!img.img_up) img.img_up = img.src;
        img.src = img.img_dn = args[i+1];
        imgGalleryArr[imgGalleryArr.length] = img;
    } }
  } else if (event == "over") {
    document.img_galleryOver = imgGalleryArr = new Array();
    for (i=1; i < args.length-1; i+=3) if ((img = MM_findObj(args[i])) != null) {
      if (!img.img_up) img.img_up = img.src;
      img.src = (img.img_dn && args[i+2]) ? args[i+2] : ((args[i+1])?args[i+1] : img.img_up);
      imgGalleryArr[imgGalleryArr.length] = img;
    }
  } else if (event == "out" ) {
    for (i=0; i < document.img_galleryOver.length; i++) { img = document.img_galleryOver[i]; img.src = (img.img_dn) ? img.img_dn : img.img_up; }
  } else if (event == "down") {
    imgGalleryArr = document[grpName];
    if (imgGalleryArr) for (i=0; i < imgGalleryArr.length; i++) { img=imgGalleryArr[i]; img.src = img.img_up; img.img_dn = 0; }
    document[grpName] = imgGalleryArr = new Array();
    for (i=2; i < args.length-1; i+=2) if ((img = MM_findObj(args[i])) != null) {
      if (!img.img_up) img.img_up = img.src;
      img.src = img.img_dn = (args[i+1])? args[i+1] : img.img_up;
      imgGalleryArr[imgGalleryArr.length] = img;
  } }
}