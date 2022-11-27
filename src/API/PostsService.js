import axios from "axios";
export default class PostService {
    constructor(baseUrl){
        this._baseUrl = baseUrl

    }
    async getPosts(){
        return await axios.get(this.baseUrl + '/api/post/list', {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }
        })
    }
    async getPost(id){
        return await axios.get(this.baseUrl + '/api/post', {
            params: {
                'id': id,
            }
        })
    }
    async create(content, files){
        let formData = new FormData();
		formData.append('content', content);
        files.map((elem, index) => {
            formData.append('attachment' + index, elem.fileObj);
        })
        return await axios.post(this.baseUrl + '/api/post/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*"
            }
        })
    }
    get baseUrl(){
        return this._baseUrl
    }
    set baseUrl(baseUrl){
        this._baseUrl = baseUrl
    }
}