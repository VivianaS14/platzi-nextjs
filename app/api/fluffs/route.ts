import { NextResponse } from "next/server";
import Database from "@database";

export const GET = async (request: Request, response: Response) => {
  try {
    const database = new Database();
    const allEntries = await database.getAll();
    const length = allEntries.length;

    return NextResponse.json({ length, data: allEntries }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { length: 0, data: [], message: "Error: Something went wrong", error },
      { status: 500 }
    );
  }
};
