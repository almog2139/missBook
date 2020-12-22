// export function LongTxt ({isLongTxtShown ,text}){
//     let des=''
//     if (isLongTxtShown){
//         des=text
//     }
//     else des=text.substring(0,100)+'...';
//     return(
//         <div>{dec}</div>
//     )
// }
export function LongTxt({ isLongTxtShown, text }) {

    let desc = ''

    if (isLongTxtShown) {
        desc = text
    } else {
        desc = text.substring(0, 50) + '...'
    }

    return (
        <div>
            {desc}
        </div>
    )
}