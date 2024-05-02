import { Login } from '../pages/loginPage.js'

class MyInfo {
    accessMyInfoPage() {
        Login.accessLoginPage()
        Login.login(user.name, user.password)
    }
}