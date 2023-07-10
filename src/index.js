const id = function (id) {
    return document.getElementById(id);
}



const makeDelay = (delay) => new Promise (resolve => setTimeout(resolve, delay));



window.addEventListener('load', async () => {
    disableScrolling();
    await startPreloaderAnimation();
    enableScrolling();
});
async function startPreloaderAnimation () {

    id('preloader-svg').style.transition = '.4s opacity, .3s transform';
    id('preloader-svg-top-part').style.transition = '.3s transform';

    await makeDelay(100);
    
    id('preloader-svg').style.opacity = '1';

    await makeDelay(50);
        
    id('preloader-svg-top-part').style.transform = 'translateY(0%)';

    await makeDelay(100);

    id('preloader-svg').style.transform = 'translateY(10%)';

    await makeDelay(150);
    
    id('preloader-svg').style.transition = '.2s transform';
    id('preloader-svg').style.transform = 'translateY(0%)';
    
    await makeDelay(150);

    id('preloader').style.opacity = '0';

    await makeDelay(400);

    id('preloader').style.display = 'none';
}



for (let button of document.getElementsByClassName('copy-button'))
    button.onclick = function () {
        let holder_input = id('holder-input');
        
        // make holder input visible
        holder_input.style.display = 'block';

        // put link inside of href attribute of tag 'a' sibling to holder input 
        holder_input.value = this.previousElementSibling.getAttribute('link');

        // copy to clipboard text inside of holder input
        holder_input.select();
        holder_input.setSelectionRange(0, 99999);
        document.execCommand('copy');

        // hide holder input
        holder_input.style.display = 'none';

        // change copy button color
        this.classList.add('copy-button-clicked');
        setTimeout(() => {
            this.classList.remove('copy-button-clicked');
        }, 2000);
    }



function disableScrolling () {
	var x = window.scrollX;
	var y = window.scrollY;
	window.onscroll = function() {
		window.scrollTo(x, y);
	};
}
function enableScrolling () {
	window.onscroll = function(){};
}