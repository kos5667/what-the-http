export class DescribeRequest {

    static describeRequestHeader (req, res, next) {
        console.info('Request Header -------------------------')
        console.log(req)
        console.info('----------------------------------------')
        next();
    }

    static describeRequestBody (req, res, next) {
        next();
    }
}
