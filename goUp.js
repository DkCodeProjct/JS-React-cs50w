[
    /*
    // CSS for the btn
        #goUp {
            display: none; 
            position: fixed; 
            bottom: 20px; 
            right: 30px; 
            z-index: 99; 
            border: none; 
            outline: none; 
            background-color: rgb(40, 255, 86); 
            color: white; 
            cursor: pointer; 
            padding: 15px; 
            border-radius: 10px; 
            font-size: 18px; 
            }

            #goUp:hover {
            background-color: #555;
            }

     */
]
window.onscroll = () => {
    const goUp = document.getElementById('#'); // elemend id name

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        goUp.style.display = 'block';
    } else {
        goUp.style.display = 'none';
    }
};

function goUp() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


