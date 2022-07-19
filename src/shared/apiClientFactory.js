const ApiClientFactory = (client) => {

    const doPost = async ({url = '', body = null}) => {
        try {
            const response = await client({url, body});
            return response.data;
        } catch (e) {
            throw e;
        }
    }
    const doGet = async ({url = ''}) => {
        try {
            const response = await client({url});
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    return {
        doPost, doGet
    }
}
export default ApiClientFactory;
