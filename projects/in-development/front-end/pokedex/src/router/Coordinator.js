export const goToHome = (navigate) => {
    navigate('/')
}
export const goToDetails = (navigate, name) => {
    navigate(`/details/${name}`)
}