import {NextResponse} from "next/server";
import {getDashboard} from "../../../lib/news.mjs";
export const runtime="nodejs";
export async function GET(){try{return NextResponse.json(await getDashboard(),{headers:{"Cache-Control":"public, s-maxage=900, stale-while-revalidate=1800"}})}catch(error){console.error("RSS loading failed",error);return NextResponse.json({error:error instanceof Error?error.message:"RSS 조회 실패"},{status:502,headers:{"Cache-Control":"no-store"}})}}
