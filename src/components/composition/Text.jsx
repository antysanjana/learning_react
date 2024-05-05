export default function Text({addEmoji,addBracket}){
    let text = "I am Javascript liabrary react";
    if(addEmoji){
        text = addEmoji(text, ':3');
    }
    if(addBracket){
        text = addBracket(text);
    }
    return (
        <div>{text}</div>
    )
}