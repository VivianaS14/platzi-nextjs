import { NextResponse } from "next/server";
import Database from "@database";

export const GET = async (request: Request, response: Response) => {
  try {
    const database = new Database();
    const fluffId = request.url.split("fluffs/")[1];
    const fluff = await database.getById(fluffId);
    if (!fluff) {
      return NextResponse.json({ message: "ERROR" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", data: fluff }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { length: 0, data: [], message: "Error: Something went wrong", error },
      { status: 500 }
    );
  }
};
