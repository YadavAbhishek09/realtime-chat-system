export const timeAgo = (timestamp) => {
    if (!timestamp) {
        return "Invalid time";
    }

    const now = new Date();
    const past = new Date(timestamp); // Parse ISO 8601 string into a Date object

    if (isNaN(past)) {
        return "Invalid time"; // Handle invalid dates gracefully
    }

    const diffInSeconds = Math.floor((now - past) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} minutes ago`;
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} hours ago`;
    } else {
        const days = Math.floor(diffInSeconds / 86400);
        return `${days} days ago`;
    }
};
