export default function checkIfDraw(squares){
    return squares.every((elem)=>{
        return elem==='X' || elem==='O';
    })
}