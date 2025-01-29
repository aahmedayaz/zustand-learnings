import { useParams } from "react-router-dom"

const AboutItems = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>Route is : /about/{id}</div>
  )
}

export default AboutItems