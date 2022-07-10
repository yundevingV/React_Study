import React , {useState} from "react";

function Cal() {
    const [price,setPrice] = useState()
    const onChange = (e) => {
        parseInt(setPrice(e.target.value))
    }
    const onReset = (e) => {
        setPrice()
    }
    const home = (e) => {
        setPrice(prePrice => prePrice*0.6)
    }
    const home10 = (e) => {
        setPrice(prePrice => (prePrice*0.6) + (price*0.4/10))
    }
    const home20 = (e) => {
        setPrice(prePrice => prePrice*0.6+ (price*0.4/20))
    }
    const home30 = (e) => {
        setPrice(prePrice => prePrice*0.6 + (price*0.4/30))
    }
    const top = (e) => {
        setPrice(prePrice => prePrice*0.68)
    }
    const top10 = (e) => {
        setPrice(prePrice => (prePrice*0.68) + (price*0.4/10))
    }
    const top20 = (e) => {
        setPrice(prePrice => prePrice*0.68+ (price*0.4/20))
    }
    const top30 = (e) => {
        setPrice(prePrice => prePrice*0.68 + (price*0.4/30))
    }
    const pc = (e) => {
        setPrice(prePrice => prePrice*0.72)
    }
    const pc10 = (e) => {
        setPrice(prePrice => (prePrice*0.72) + (price*0.4/10))
    }
    const pc20 = (e) => {
        setPrice(prePrice => prePrice*0.72+ (price*0.4/20))
    }
    const pc30 = (e) => {
        setPrice(prePrice => prePrice*0.72 + (price*0.4/30))
    }
    const all = (e) => {
        setPrice(prePrice => prePrice*0.8)
    }
    const all10 = (e) => {
        setPrice(prePrice => parseInt((prePrice*0.8) + (price*0.4/10)))
    }
    const all20 = (e) => {
        setPrice(prePrice => parseInt(prePrice*0.8+ (price*0.4/20)))
    }
    const all30 = (e) => {
        setPrice(prePrice => parseInt(prePrice*0.8 + (price*0.4/30)))
    }
    const style = {padding : '1px'}
    return(
        <div style={style}>

            <input onChange={onChange} value={parseInt(price)} />

            <button onClick={onReset}>초기화 </button> <br />

            <button onClick={home}>집에서 받을경우 </button> 
            <button onClick={top}>탑클래스만 이용할 경우 </button> 
            <button onClick={pc}>피시방만 이용할 경우 </button> 
            <button onClick={all}>모두 이용할 경우 </button> 
            <br />
            <button onClick={home10}>집에서 받을경우 + 10% 쿠폰</button> 
            <button onClick={top10}>탑클래스만 이용할 경우 + 10% 쿠폰</button> 
            <button onClick={pc10}>피시방만 이용할 경우 + 10% 쿠폰</button> 
            <button onClick={all10}>모두 이용할 경우 + 10% 쿠폰</button> 
            <br />
            <button onClick={home20}>집에서 받을경우 + 20% 쿠폰</button> 
            <button onClick={top20}>탑클래스만 이용할 경우 + 20% 쿠폰</button> 
            <button onClick={pc20}>피시방만 이용할 경우 + 20% 쿠폰</button> 
            <button onClick={all20}>모두 이용할 경우 + 20% 쿠폰</button> 
            <br />
            <button onClick={home30}>집에서 받을경우 + 30% 쿠폰</button> 
            <button onClick={top30}>탑클래스만 이용할 경우 + 30% 쿠폰</button> 
            <button onClick={pc30}>피시방만 이용할 경우 + 30% 쿠폰</button> 
            <button onClick={all30}>모두 이용할 경우 + 30% 쿠폰</button> 
            <br />
            <div>
                <b> 받을 금액 : {parseInt(price)}</b>
            </div>


        </div>

    )
}
export default Cal