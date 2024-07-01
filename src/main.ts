// import { createUser } from "./queries";

import {
  getPostsForLast24Hours,
  getUserById,
  getUsersWithPostsCount,
} from "./queries";

// import { createPost } from "./queries";

async function main() {
  // createUser({
  //   age: 18,
  //   email: "test+1@gmail.com",
  //   name: "PTR",
  // });
  // createPost({
  //   content: "Its trending ........",
  //   title: "Generative ai",
  //   userId: 2,
  // });
  const userById = await getUserById(1);
  console.log("User By ID", userById);

  const userWithPostCount = await getUsersWithPostsCount(1, 5);
  console.log("User with post count", userWithPostCount);

  const latestPosts = await getPostsForLast24Hours(1, 5);
  console.log("latest posts", latestPosts);
}

main();
