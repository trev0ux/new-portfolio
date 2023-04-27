import { getStrapiURL } from "./api";

export default function getStrapiMedia(image) {
    var { url } = image?.data.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
}