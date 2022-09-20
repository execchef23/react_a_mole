import { useEffect } from "react"
import moleImg from '../mole.png'

const Mole =(props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '25vw'}} src={moleImg} onClick={props.handClick} />
        </div>
    )
}

export default Mole