/*eslint-disable*/
// import store from "../../store/index"
const map = new Map()
export const sendMessage = (socket, message, callback) => {
    // message.requestId = message.requestId || new Date().getTime()
    // callback && map.set(message.requestId, callback)
    // socket.send(JSON.stringify(message))
}

export const onmessageWS = (e) => {
    // const data = JSON.parse(e.data)
    // const callback = map.get(data.requestId) 
    // callback && callback(data)
    // if (data.type === "groupMessage"){
        //新消息
        // store.dispatch("addToMessageList", data.content)
    // }
}