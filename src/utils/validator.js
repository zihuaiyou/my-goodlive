import validator from "validator";
import { isEmpty } from "lodash";

const validatorInput = (data) => {
    let error = {};
    if (validator.isEmpty(data.username)) {
        error.username = '用户名不能为空'
    }
    if (validator.isEmpty(data.password)) {
        error.password = '密码不能为空'
    }
    return {
        isValid: isEmpty(error),
        error
    }
}

export default validatorInput