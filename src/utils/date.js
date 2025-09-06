    export function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };
        return date.toLocaleString("en-US", options);
    }