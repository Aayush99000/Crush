let highestZ=1;


class Page{

    holdingpage =false;

    //old positions of mouse 
    prevMouseX =0;
    prevMouseY=0;

    //current mouse position 
    mouseX =0;
    mouseY =0;

    //defines the animation velocity
    velocityX =0;
    velocityY =0;

    //defines the current position of page
    currentPageX =0;
    currentPageY =0;

    init(page){

        page.addEventListener('mousedown', (e)=>{
            this.holdingpage =true;
            page.style.zIndex =highestZ;
            highestZ+= 1;

            if(e.button ===0){
                this.prevMouseX =this.mouseX;
                this.prevMouseY =this.mouseY;

                console.log(this.prevMouseX);
                console.log(this.prevMouseY);
            }
        })

        document.addEventListener('mousemove',(e)=>{
            console.log("Mouse is moving");
            this.mouseX =e.clientX;
            this.mouseY =e.clientY;

            this.velocityX = this.mouseX -this.prevMouseX ;
            this.velocityY = this.mouseY -this.prevMouseY;
            
            if(this.holdingpage==true){
                this.currentPageX += this.velocityX;
                this.currentPageY += this.velocityY;

                this.prevMouseX =this.mouseX;
                this.prevMouseY =this.mouseY;

                page.style.transform = `translateX(${this.currentPageX}px) translateY(${this.currentPageY}px)`;
            }
        })

        window.addEventListener('mouseup',(e)=>{
            // console.log('Mouse button is released');
            this.holdingpage = false ;
        })
    }

}

const paper = Array.from(document.querySelectorAll(".page"));

paper.forEach(page => {
    const p =new Page();
    p.init(page);
})