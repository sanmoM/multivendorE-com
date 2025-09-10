import useAxios from '@/hooks/useAxios';
import toast from 'react-hot-toast';

export default function GoogleSignIn() {
    const axios = useAxios();
    const handleGoogleAuth = async () => {
        try {
            const res = await axios.get(`/auth/google/redirect`);
            // console.log(res?.data?.url, "res")
            if (res?.data?.url) {
                window.location.href = res?.data?.url;
            } else {
                toast.error("Something went wrong")
            }
        }
        catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };
    return (
        <div>
            <button
                onClick={handleGoogleAuth}
                className="w-full flex items-center justify-center gap-2 border bg-white rounded-md py-3 text-sm font-medium mb-6"
            >
                <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt="Google"
                />
                Sign In with Google
            </button>
        </div>
    )
}
