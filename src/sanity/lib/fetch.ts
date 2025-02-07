import { createClient } from "next-sanity";

const client = createClient({
    projectId:"nracvwl9",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
  })



export async function sanityFetch({query, params = {}}: {query: string, params?: any}) {
    return await client.fetch(query, params)
}
