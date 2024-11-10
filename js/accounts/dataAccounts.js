export const dataAccounts = [{
        id: 1,
        fullName: "Lê Thị Yến Nhi",
        userName: "Yennhi2004",
        email: "yennj3101@gmail.com",
        password: "2004Yennhi0205@",
    },

]

export const addAccount = (user) => {
    dataAccounts = [...dataAccounts, user]
}