
function getData() {

    var carouselData = {
        data: [
            {
                "id": 0,
                "objType": "image", // What type of content should be shown? (image, video, text, textImg)...
                "header": "First Header",
                "text": "Im the first slide",
                "captionText": "Im some interesting Caption...",
                "imgPath": "images/1.jpg",
                "vidPathMP4": "video/firstVid.mp4",
                "vidPathOGG": "video/firstVid.ogg",
                "imgAlt": "This is alt text 1",
                "classes": ["item", "active"],
                "navContent": 1
            },
            {
                "id": 1,
                "objType": "image",
                "header": "Second Header",
                "text": "Im the second slide",
                "captionText": "Im some interesting Caption...",
                "imgPath": "images/2.jpg",
                "vidPathMP4": "video/firstVid.mp4",
                "vidPathOGG": "video/firstVid.ogg",
                "imgAlt": "This is alt text 2",
                "classes": ["item"],
                "navContent": 2
            },
            {
                "id": 2,
                "objType": "text",
                "header": "Third Header",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "captionText": "",
                "imgPath": "images/3.jpg",
                "vidPathMP4": "video/firstVid.mp4",
                "vidPathOGG": "video/firstVid.ogg",
                "imgAlt": "This is alt text 3",
                "classes": ["item"],
                "navContent": 3
            },
            {
                "id": 3,
                "objType": "video",
                "header": "Fourth Header",
                "text": "Im the third slide",
                "captionText": "",
                "imgPath": "images/3.jpg",
                "vidPathMP4": "video/firstVid.mp4",
                "vidPathOGG": "video/firstVid.ogg",
                "imgAlt": "This is alt text 4",
                "classes": ["item"],
                "navContent": 4
            }
        ]
    };

    return carouselData;
}

