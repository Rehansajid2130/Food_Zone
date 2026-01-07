import "./item_detail.css"
import { BASE_URL } from "./Main_page"

const item_detail = (props) => {

  return (
    <div className='Item_container'>
        <div className="img">
            <img src={BASE_URL+props.image} alt="img"
            className='img_setting'
            />
        </div>
        <div className="right_content">
            <div className="dish_name">
            <h3>
                {props.name}
                </h3>
            </div>
            <div className="dish_detail">
            <p>{props.text}</p>
            </div>
            <div className="dish_price">
                <span>${props.price.toFixed(2)}</span>
            </div>
        </div>
    </div>
  )
}

export default item_detail