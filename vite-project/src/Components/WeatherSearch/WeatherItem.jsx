import { useDispatch, useSelector } from "react-redux"


function WeatherItem() {
const dispatcth = useDispatch()


    useEffect(() => {
        dispatcth(fetchPosts)
        console.log(posts);
    }, [])

const {posts, loading, error} = useSelector((state)=> {
    state.posts
}) 

console.log(posts);

    return (
      <>


      </>
    );

  }
  export default WeatherItem
  