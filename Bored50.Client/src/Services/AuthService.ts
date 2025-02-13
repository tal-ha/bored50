import IAuth from "../Interfaces/IAuth";
import { API_Authenticate } from "./ApiService";

/**
 * Get token from API
 * @param email
 * @param password
 * @returns
 */
export async function _login(email: string, password: string): Promise<IAuth | null> {
    try {
        const data = await API_Authenticate(email, password);
        if (data == null) return null;

        return {
            userId: data.json.id,
            username: email,
            token: data.token,
        };
    } catch (e) {
        console.error(e);
        return null;
    }
}