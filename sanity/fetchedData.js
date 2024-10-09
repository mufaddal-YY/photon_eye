import { groq } from "next-sanity";
import { client } from "./lib/client";

const defaultFetchOptions = { cache: "no-cache" };

export async function getHomeData() {
  const result = await client.fetch(
    groq`*[_type == "home"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         "blurImage": blurImage.asset->url,
         "clearImage": clearImage.asset->url,
         "drImage": drImage.asset->url,
         name,
         description,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getServicesData() {
  const result = await client.fetch(
    groq`*[_type == "services"]{
         _id,
         _createdAt,
         title,
         description,
         "image": image.asset->url,
         link,
       
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getLocationsData() {
  const result = await client.fetch(
    groq`*[_type == "locations"]{
         _id,
         _createdAt,
         name,
         address,
         "image": image.asset->url,
         link,
       
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getTestimonialsData() {
  const result = await client.fetch(
    groq`*[_type == "testimonials"]{
         _id,
         _createdAt,
         name,
         review,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}
