import { useCallback, useState } from "react"

interface RequestConfig {
    url: string;
    method: string;
    headers: {};
    body: {} | null;
}

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback( async (requestConfig : RequestConfig, applyData : any) => {
        setIsLoading(true);
        setIsSaving(true);
        setError(null);
        console.log(requestConfig.body);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });
            const data = await response.json();
            console.log(data);
            
            if (!data.success) {
                throw data;
            } else {
                applyData(data.data);
            }

        } catch (err: any) {
            setError(err.message);
        }
        setIsLoading(false);
        setIsSaving(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
        isSaving
    };
};

export default useHttp;