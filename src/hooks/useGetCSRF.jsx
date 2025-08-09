import axios from 'axios'

export default function useGetCSRF() {
    const res = axios.get("https://multivendor.testorbis.com/sanctum/csrf-cookie", {withCredentials: true, withXSRFToken: true})
    return res
}
