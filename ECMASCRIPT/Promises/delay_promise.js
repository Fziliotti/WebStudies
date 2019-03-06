
export const delay = milliseconds => data =>
new Promise((resolve, reject) => 
    setTimeout(() => resolve(data), milliseconds)
);