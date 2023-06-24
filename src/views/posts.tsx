import { Header } from "../components/common"
import PostsBoard from "../components/postsBoard/PostsBoard"

const Posts = () => {
  return (
    <>
      <Header title={"Last posts"} />
      <PostsBoard />
    </>
  )
}

export default Posts
