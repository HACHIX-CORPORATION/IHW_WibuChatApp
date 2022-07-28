import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../screen/HomePage/HomePage.vue";
import LoginPage from "../screen/LoginPage/LoginPage.vue";
import SignupPage from "../screen/SignupPage/SignupPage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomePage,
	},
	{
		path: "/login",
		name: "Login",
		component: LoginPage,
	},
	{
		path: "/signup",
		name: "Signup",
		component: SignupPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
