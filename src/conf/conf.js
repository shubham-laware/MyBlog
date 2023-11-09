const conf={
    url:String(import.meta.env.VITE_URL),
    projectID:String(import.meta.env.VITE_PROJECT_ID),
    dbId:String(import.meta.env.VITE_DB_ID),
    collectionId:String(import.meta.env.VITE_COLLECTION_ID),
    bucketId:String(import.meta.env.VITE_BUCKET_ID)

}

export default conf;