import { fetchGraphQL, GET_PROJETS } from './lib/api';

async function test() {
  console.log("Fetching projects...");
  const data = await fetchGraphQL(GET_PROJETS);
  console.log("Full Response Data:", JSON.stringify(data, null, 2));
}

test().catch(console.error);
