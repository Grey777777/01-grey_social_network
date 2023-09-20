import axios from 'axios';

const instance = axios.create({
	baseURL:'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers:{"API-KEY": "faade808-4c81-46e5-b715-92533820360b"}
})

// Создаем объект usersAPI в котором сидит функция getUsers

export const usersAPI = {
	getUsers(xxx, yyy){
		return (
			instance.get(`users?page=${xxx}&count=${yyy}`)
			.then(response =>{
				return response.data;
			})
		)	
	},

	delFollow(xxx){
		return (
			instance.delete(`follow/${xxx}`)
			.then(response =>{
				return response.data;
			})
		)	
	},

	postFollow(xxx){
		return (
			instance.post(`follow/${xxx}`,{})
			.then(response =>{
				return response.data;
			})
		)	
	},

	getProfile(xxx){
		console.warn("Obsolete method. Please ProfileAPI object");
		return (
			profileAPI.getProfile(xxx)
		)
	}
}

export const profileAPI = {
	getProfile(xxx){
		return (
			instance.get(`profile/${xxx}`)       //можно записать так
			.then(response =>{
				return response.data;
			})
			
		)
	},
	getAuthorProfile(xxx){
		return (
			instance.get(`profile/${xxx}`)       //можно записать так	
		)
	},
	getStatus(xxx){
		return (
			instance.get(`profile/status/`+ xxx)        //а можно записать и так
		)	
	},
	updateStatus(xxx){
		return (
			instance.put(`profile/status/`,{status: xxx})
		)
	},
	submitFile(photoFile){
		const formData = new FormData();
		formData.append("image", photoFile);
		
		return (
			instance.put(`profile/photo/`, formData)
		)
	}
	
}

export const authAPI = {
	me(){
		return (
			instance.get(`auth/me`)
		)
	},
	login(email, password, rememberMe = false){
		return(
			instance.post(`auth/login`,{email, password, rememberMe})
		)
	},
	logout(){
		return(
			instance.delete(`auth/login`)
		)
	}

}
