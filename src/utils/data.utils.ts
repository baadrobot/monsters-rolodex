export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    // if u return await you actually returning a promise
    return await response.json();
}