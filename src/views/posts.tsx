import { Header } from "../components/common"
import PostsBoard from "../components/postsBoard/PostsBoard"

const Posts = () => {
  return (
    <>
      <Header title={"Últimos posts"} />
      <PostsBoard />
    </>
  )
}

export default Posts
