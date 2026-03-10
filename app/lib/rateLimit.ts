const requests = new Map<string, { count: number; time: number}>()
const LIMIT = 5
const WINDOW = 60000

export function rateLimit(ip: string){
    const now = Date.now()
    const user = requests.get(ip)

    if(!user){
        requests.set(ip, { count: 1, time: now})
        return true
    }

    if(now - user.time > WINDOW){
        requests.set(ip, { count: 1, time: now})
        return false
    }

    if(user.count >= LIMIT){
        return false
    }

    user.count++
    return true
}