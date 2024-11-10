export const dataAccounts = [
    {
        id: 1,
        fullName: "Nguyễn Hoàng Gia Vĩ",
        userName: "Giavi1302",
        email: "nguyenhoanggiavi123@gmail.com",
        password: "Giavi#1302",
    },
    {
        id: 2,
        fullName: "Hoàng Thị Ngọc",
        userName: "Ngoc1234",
        email: "hoangthingoc@gmail.com",
        password: "HoangNgoc#1007",
    }
]

export const addAccount = (user) => {
    dataAccounts = [...dataAccounts, user]
}