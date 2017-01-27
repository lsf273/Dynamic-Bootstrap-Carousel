'use strict';
$(document).ready(function() {
    init();
});

function init() {

    var carouselData = getData();
    
    carouselData.data.forEach(function (element, index) {

        function enableAutoplay() { 
            vid.autoplay = true;
            vid.load();
        }

        // Creates .item element and adds captions and images as children...
        // Creates slides based on array length and appends them all to .carousel-inner...
        var slide = document.createElement("div");
        var captions = document.createElement("div");
        var headerText = document.createElement("h2");
        var text = document.createElement("p");
        var img = document.createElement("img");
        var vid = document.createElement("video");
        var vidSrc1 = document.createElement("source");
        var vidSrc2 = document.createElement("source");

        img.setAttribute('src', element.imgPath);
        img.setAttribute('alt', element.imgAlt);

        vid.setAttribute('controls', true);
        vidSrc1.setAttribute('src', element.vidPathMP4);
        vidSrc2.setAttribute('src', element.vidPathOGG);

        vidSrc1.setAttribute('type', "video/mp4");
        vidSrc2.setAttribute('type', "video/ogg");

        vid.classList.add("carousel-video");
        vid.append(vidSrc1, vidSrc2);

        captions.classList.add("carousel-caption");

        if(element.captionText !== "" || element.captionText !== " ") {
             captions.append(element.captionText);
        }

	    for( var j = 0; j < element.classes.length; j++ ) {
	    	slide.classList.add(element.classes[j]);
	    }

        switch (element.objType) {
            case "image":
                slide.append(img);
                break;
            case "text":
                slide.append(headerText);
                slide.append(text);
                headerText.append(element.header);
                text.append(element.text);
                text.classList.add('carousel-text');
                break;
            case "video":
                slide.append(vid);
                
                $('#main-carousel').bind('slid.bs.carousel', function (e) {
                    enableAutoplay();
                });
                break;
            case "text-vid":
                // Still Working on this Content Type...
                break;
        }
        
        slide.setAttribute("id", element.id);
        slide.append(captions);
        
        $(".carousel-inner").append(slide);
        
       // Creates the footer navigation...
        var navLink = document.createElement("a");
        var textNode = document.createTextNode(element.navContent);
        navLink.setAttribute('data-target', '#main-carousel');
        navLink.setAttribute('data-slide-to', element.id);
        navLink.classList.add('nav-link');
        navLink.append(textNode);

        $("#nav-container").append(navLink);

        // Creates the carousel indicators...
        var indicator = document.createElement("li");
        indicator.setAttribute('data-target', '#main-carousel');
        indicator.setAttribute('data-slide-to', element.id);
        $( ".carousel-indicators li:first-of-type" ).addClass( "active" );

        $(".carousel-indicators").append(indicator);

    }); 
}