import { useQuery } from 'react-query'

function usePresence() {
    const { isLoading, er, data } = useQuery('presence', async () => {
        const res = await fetch(`https://api.lanyard.rest/v1/users/536644802595520534`)
        return res.json()
    })
    return data
}

export default usePresence