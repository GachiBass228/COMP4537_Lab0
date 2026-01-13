import { USER_MESSAGES } from "../lang/messages/en/user.js";
import { ButtonManager } from "./ButtonManager.js";
import { GameEngine } from "./GameEngine.js";

export class AppController{
    constructor(rootElement){
        this.root = rootElement;
        this.manager = new ButtonManager();
        this.engine = new GameEngine(this.manager);
        this.buildUI();
    }

    buildUI(){
        this.label = document.createElement("label");
        this.label.textContent = USER_MESSAGES.PROMPT;
        this.input = document.createElement("input");
        this.input.type = "number";
        this.goButton = document.createElement("button");
        this.goButton.textContent = USER_MESSAGES.BTN_GO;
        this.root.append(this.label, this.input, this.goButton);
        this.goButton.onclick = () => {
            const value = Number(this.input.value);
            if (value < 3 || value > 7){
                this.engine.showInvalidRange();
                return;
            }
            this.engine.reset();
            this.engine.start(value);
        }
    }
}