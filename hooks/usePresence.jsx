import useSWR from "swr"

function usePresence() {
    const { isLoading, er, data } = useSWR('https://api.lanyard.rest/v1/users/536644802595520534', async (url) => {
        const res = await fetch(url)
        return res.json()
    })
    return data
}

export default usePresence