

const page = ({params}) => {
    console.log(params);
  return (
    <div>
        users: {params.user}
    </div>
  )
}

export default page