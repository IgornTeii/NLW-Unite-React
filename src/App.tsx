interface MyButtonProps{
    texto: string
}


function MyButton(props: MyButtonProps){
    return<button className="bg-cyan-500 h-10 px-3 rounded font-bold">{props.texto}</button>
}

export function App() {
return(
    <div className="flex gap-3 ">
    <MyButton texto="FODA"></MyButton>
    <MyButton texto="LINDO"></MyButton>
    <MyButton texto="ANIMAL"></MyButton>
    <MyButton texto="ROCKETSEAT"></MyButton>
    <MyButton texto="FODA"></MyButton>
    <MyButton texto="FODA"></MyButton>
    </div>
)
}