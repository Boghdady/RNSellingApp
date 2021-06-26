import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

const addListing = (listing) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endPoint, data);
};

export default {
  getListings,
  addListing,
};

const on = {
  category: {
    backgroundColor: "#9f75e6",
    icon: "book-open-variant",
    label: "Books",
    value: 2,
  },
  description: "es",
  images: [
    "file:///Users/index/Library/Developer/CoreSimulator/Devices/A850ECAC-5A62-4145-8801-16FA2542DA1A/data/Containers/Data/Application/5F49EB7B-069E-46DF-94A3-C702F72D0EFE/tmp/71CDFDEC-CBBE-4D8F-970A-72647FB14154.jpg",
  ],
  price: "13",
  title: "title",
};
