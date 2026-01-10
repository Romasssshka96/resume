import './whyMeItem.css'


const whyMeItem = (props) => {
    const {img, title, text} = props
    return(
        <div class="item">
            <div class="round"><img src={img} alt="dialogue"/></div>
            <h6>{title}</h6>
            <p>{text} </p>
        </div>
    )
}



export default whyMeItem














