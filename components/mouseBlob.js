'use client'

const blob = document.getElementById("blob")
const blobInfo = blob.getBoundingClientRect();

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    finalX = clientX - (blobInfo.width / 2);
    finalY = clientY - (blobInfo.height / 2);

    blob.animate({
        left: `${finalX}px`,
        top: `${finalY}px`
    }, {duration:3000, fill:"forwards"})
}