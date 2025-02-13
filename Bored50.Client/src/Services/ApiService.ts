/**
 * @see https://api.mattermost.com/#tag/authentication
 * @param username
 * @param password
 * @returns
 */
export async function API_Authenticate(email: string, password: string): Promise<any> {
    const response = await fetch(`/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else {
        if (response.status != 500) {
            const errorObj = await response.json();
            throw errorObj;
        }
        else {
            throw `${response.status}: ${response.statusText}`;
        }
    }
}


/**
 * Handle a not OK response
 * @param response 
 */
async function handleNotOk(response: Response) {
    if (response.status == 400
        || response.status == 401
        || response.status == 403
        || response.status == 404
    ) {
        const errorObj = await response.json();
        throw errorObj;
    }
    else {
        throw `${response.status}: ${response.statusText}`;
    }
}