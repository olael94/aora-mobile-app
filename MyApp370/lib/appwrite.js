import {Account, Avatars, Client, Databases, ID, Query} from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.or.aora',
    projectId: '674a3508001566f366e7',
    databaseId: '674a44460008c2593272',
    userCollectionId: '674a448d001fc0f24539',
    videoCollectionId: '674a44bf0036412ebdcd',
    storageId: '674a478f0010472075e2'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    // Register User
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password)

        // Create User in Database
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) =>{
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        );

        if(!currentUser) throw Error;
        // This will return existing user
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
}
