export async function POST(){
  // Mock logic; replace with DB check later
  return new Response(JSON.stringify({ success:true, reward:10 }), { status:200, headers:{ "Content-Type":"application/json" } });
}
