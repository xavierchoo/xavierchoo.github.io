const closeButton= document.querySelector('.lightbox-close');
const lightBox= document.querySelector ('.lightbox');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxImage = document.querySelector('.lightbox-image');
const nextButton = document.querySelector('.lightbox-next');
let locationNumber =0;
function showImage(event){
	lightBox.classList.remove('hidden');

	const elementClickOn=event.target;
	const galleryItemParent = elementClickOn.parentElement;

	lightboxImage.innerHTML = galleryItemParent.innerHTML;
}


function hideImage(event){
	event.preventDefault();
	lightBox.classList.add('hidden');
}
closeButton.onclick = hideImage;
for(let i = 0 ; i< galleryItems.length; i++){
	let item =  galleryItems[i];
	item.onclick = showImage;

}
nextButton.onclick = nextImage;
if(i == 1){
	console.log (' it works')
}