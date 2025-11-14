'use server';

import { ID, db } from "@/appwrite/appwrite";

const dbID = process.env.NEXT_PUBLIC_APPWRITE_DB_ID;
const dbTableID = process.env.NEXT_PUBLIC_APPWRITE_DB_TABLE_ID;

export async function CreateFeedBack(name: string, email: string, feedback: string) {
  try {
    await db.createDocument({
      databaseId: dbID,
      collectionId: dbTableID,
      documentId: ID.unique(),
      data: {
        "name": name,
        "email": email,
        "feedback": feedback
      }
    })
  } catch (error) {
    return {error, res: 'Failed'};
  }
}