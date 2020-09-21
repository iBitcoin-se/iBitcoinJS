
const request = require('request')


class Base {

    static async makeRequest(url, params){
        const response = await new Promise( (resolve, reject) =>{
            const options = {
                json: {
                    'api_key': process.env.API_KEY,
                    ...params
                },
                timeout:15000,
                followRedirect:false,
            }
            request.post(url, options, (error, res) => {
                if (error) {
                      return resolve({isError: true, error:error});
                }
                return resolve(res);
            })
        })

        return this.responseHandler(response);
    }
    static responseHandler(response){

        const responseCode = response.statusCode;
        const responseBody = response.body;
        const ErrorMessage = {'success': false, 'message': 'Something is technically wrong' };

        if (typeof response.isError === 'boolean') {
            return JSON.stringify(ErrorMessage);
        }

        if (responseCode !== 200) {
            console.log('iBitcoin returned non-200 http code', responseCode);
            if (process.env.SHOW_ERROR_TO_USER === 'true') return JSON.stringify(responseBody);
            return JSON.stringify(ErrorMessage);
        }
        return JSON.stringify(responseBody);

    }

}


module.exports = Base;