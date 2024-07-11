import { cookies } from 'next/headers';
import { redirect, RedirectType } from 'next/navigation'
import { NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
  request.cookies.delete('BEARER');
  cookies().delete('BEARER');
  console.log("Logout completed");
  redirect('/', RedirectType.push);
}