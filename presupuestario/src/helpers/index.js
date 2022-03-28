export const generarId = () => {
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(2)
    return random + fecha 
}
