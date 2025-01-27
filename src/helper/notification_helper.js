import { notification } from "antd"

export const SUCCESS_NOTIFICATION = (message) =>{
    notification.success({message:message})
}

export const ERROR_NOTIFICATION = (message) =>{
    notification.error({message:message})
}