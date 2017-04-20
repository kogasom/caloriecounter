class Validator
{
    constructor (request, rules)
    {
        this.errors = {}

        this.hasErrors = false

        rules.forEach(field => {
            if (!request[field]) {
                 this.errors[field] = field+' is required'
                 this.hasErrors = true
            }
        })
    }
}

var validate = function (request, rules) {
    return new Validator (request, rules)
}

export default validate
