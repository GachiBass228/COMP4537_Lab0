export class ButtonEntity {
    constructor(order, color){
        this.order = order;
        this.element = document.createElement("button");
        this.element.style.width = "10em";
        this.element.style.height = "5em";
        this.element.style.position = "absolute";
        this.element.style.backgroundColor = color;
        this.showOrder();
        document.body.appendChild(this.element);
    }

    showOrder(){
        this.element.textContent = this.order + 1;
    }

    hideOrder(){
        this.element.textContent = "";
    }

    setPosition(x, y){
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
    }

    remove(){
        this.element.remove();
    }

    enableClick(handler){
        this.element.onclick = handler;
    }

    disableClick(){
        this.element.onclick = null;
    }
}