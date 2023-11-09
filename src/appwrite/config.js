import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";


class Services {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client 
        .setEndpoint(conf.url)
        .setProject(conf.projectID);

        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {

            return await this.databases.createDocument(
                conf.dbId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.dbId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }   
    }


    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.dbId,
                conf.collectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error 
            return false;  
        }
      
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.dbId,
                conf.collectionId,
                slug
            ) 
        } catch (error) {
            throw error;
            return false; 
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.dbId,
                conf.collectionId,
                queries

            )
        } catch (error) {
            throw error;
            return false;
        }

    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )  
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.bucketId,
                fileID
            )
            return true;
        } catch (error) {
            throw error
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.bucketId,
            fileID
        )
    }

}

const service = new Services();

export default service;
