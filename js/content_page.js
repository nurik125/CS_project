import card from "../modules/recent_card.js";

// document.querySelector("main")

export function card_create(num=6){
    // * Prompt creation

    let prompt = ``;
    for(let i=1; i<=num; i++){
        prompt += card({grid_area: i});
    }
    return prompt;
}