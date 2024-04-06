

const page = ({params}) => {
    

  return (
    <div>
        <h1>User id: {params.user}</h1>
        <h1>Hobbie: {params.hobbie[0]}</h1>
    </div>
  )
}

export default page