import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "app",
      "data",
      "elements.json"
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid data format");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading elements data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
