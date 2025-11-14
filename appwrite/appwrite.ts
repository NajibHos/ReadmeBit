import { Client, Account, Databases } from 'appwrite';

const endPoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

export const client = new Client();

// @ts-ignore
client
    .setEndpoint(endPoint)
    .setProject(projectID);

export const account = new Account(client);
export const db = new Databases(client);
export { ID } from 'appwrite';
