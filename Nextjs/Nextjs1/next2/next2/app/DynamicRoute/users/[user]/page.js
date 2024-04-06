

const page = ({params}) => {
    // console.log(params.user);
  return (
    <div>
        User: {params.user};
        Hobbie: {params.hobbie};
    </div>
  )
}

export default page